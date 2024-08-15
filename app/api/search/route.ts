import { getCountry } from "@/controller/countryController";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";

    if (search) {
      const countries = await getCountry(search);

      return Response.json({ data: countries });
    }
    return Response.json({ data: search });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch countries" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
