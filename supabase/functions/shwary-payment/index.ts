import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const COUNTRY_CONFIG: Record<string, { prefix: string; minAmount: number }> = {
  KE: { prefix: "+254", minAmount: 100 },
  DRC: { prefix: "+243", minAmount: 2900 },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber, countryCode = "KE" } = await req.json();

    if (!phoneNumber || typeof phoneNumber !== "string") {
      return new Response(
        JSON.stringify({ error: "Phone number is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const country = COUNTRY_CONFIG[countryCode];
    if (!country) {
      return new Response(
        JSON.stringify({ error: "Unsupported country" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const cleaned = phoneNumber.replace(/\s/g, "");
    const formatted = cleaned.startsWith(country.prefix)
      ? cleaned
      : cleaned.startsWith("0")
      ? country.prefix + cleaned.slice(1)
      : country.prefix + cleaned;

    const merchantId = Deno.env.get("SHWARY_MERCHANT_ID");
    const merchantKey = Deno.env.get("SHWARY_MERCHANT_KEY");

    if (!merchantId || !merchantKey) {
      return new Response(
        JSON.stringify({ error: "Payment service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const endpoint = `https://api.shwary.com/api/v1/merchants/payment/${countryCode}`;

    const amount = countryCode === "DRC" ? 5000 : 2600;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-merchant-id": merchantId,
        "x-merchant-key": merchantKey,
      },
      body: JSON.stringify({
        amount,
        clientPhoneNumber: formatted,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Shwary error:", data);
      return new Response(
        JSON.stringify({ error: data.message || "Payment failed", details: data }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, transaction: data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Payment error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
