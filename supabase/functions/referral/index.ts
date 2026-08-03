import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
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
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Read the JSON body
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
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    // Insert into the Customer table
    const { data, error } = await supabase
      .from("Customer")
      .insert({
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        phone: body.phone.trim(),
        email: body.email.trim(),
        service: body.service.trim(),
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
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Success!
    return new Response(
      JSON.stringify({
        success: true,
        message: "Referral submitted successfully!",
        referral: data,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid request.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});