import { getCountry } from "@/controller/countryController";

export const dynamic = "force-static";

export async function GET() {
  try {
    // Fetch data from your controller
    const countries = await getCountry();

    // Return the data as JSON
    return new Response(JSON.stringify({ data: countries }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Handle errors
    return new Response(
      JSON.stringify({ error: "Failed to fetch countries" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
