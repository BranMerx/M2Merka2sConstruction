const FUNCTION_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL;

export async function submitReferral(formData: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    service: string;
}) {
    const response = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message ?? "Submission failed.");
    }

    return result;
}