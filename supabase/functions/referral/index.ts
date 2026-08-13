import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Method not allowed.",
        }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Make sure Resend API key exists
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return new Response(
        JSON.stringify({
          success: false,
          message: "Email service is not configured.",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Read JSON body
    const body = await req.json();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "service",
    ];

    for (const field of requiredFields) {
      if (
        typeof body[field] !== "string" ||
        body[field].trim() === ""
      ) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `${field} is required.`,
          }),
          {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    const firstName = body.firstName.trim();
    const lastName = body.lastName.trim();
    const phone = body.phone.trim();
    const email = body.email.trim();
    const service = body.service.trim();

    // Insert into the Customer table
    const { data, error } = await supabase
      .from("Customer")
      .insert({
        firstName,
        lastName,
        phone,
        email,
        service,
      })
      .select()
      .single();

    // Check for database errors
    if (error) {
      console.error("Database Error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          message: "Unable to save referral.",
          error: error.message,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // --------------------------------------------------
    // Send emails using Resend
    // --------------------------------------------------

    // Email to the customer
    const customerEmailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "M2 Merka2s Construction <info@m2merka2sconstruction.com>",
          to: [email],
          reply_to: "info@m2merka2sconstruction.com",
          subject: "We Received Your Estimate Request",
          html: `
            <h2>Thank You, ${firstName}!</h2>

            <p>
              We have received your request for a free estimate
              from M2 Merka2s Construction.
            </p>

            <h3>Request Details</h3>

            <p>
              <strong>Name:</strong>
              ${firstName} ${lastName}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Service Requested:</strong>
              ${service}
            </p>

            <p>
              A member of our team will review your request
              and contact you regarding your project.
            </p>

            <p>
              Thank you for choosing M2 Merka2s Construction!
            </p>
          `,
        }),
      }
    );

    // Email to the business owner
    const ownerEmailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "M2 Merka2s Construction <info@m2merka2sconstruction.com>",
          to: ["info@m2merka2sconstruction.com"],
          subject: "New Free Estimate Request",
          html: `
            <h2>New Free Estimate Request</h2>

            <h3>Customer Information</h3>

            <p>
              <strong>Name:</strong>
              ${firstName} ${lastName}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <h3>Project Information</h3>

            <p>
              <strong>Service Requested:</strong>
            </p>

            <p>
              ${service}
            </p>

            <hr>

            <p>
              This referral was submitted through the
              M2 Merka2s Construction website.
            </p>
          `,
        }),
      }
    );

    // Check whether either email failed
    if (!customerEmailResponse.ok) {
      console.error(
        "Customer email error:",
        await customerEmailResponse.text()
      );
    }

    if (!ownerEmailResponse.ok) {
      console.error(
        "Owner email error:",
        await ownerEmailResponse.text()
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Estimate request submitted successfully!",
        referral: data,
      }),
      {
        status: 201,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Function Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid request.",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});