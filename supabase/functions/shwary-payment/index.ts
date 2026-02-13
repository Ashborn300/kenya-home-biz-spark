import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber || typeof phoneNumber !== "string") {
      return new Response(
        JSON.stringify({ error: "Phone number is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Ensure phone starts with +254
    const cleaned = phoneNumber.replace(/\s/g, "");
    const formatted = cleaned.startsWith("+254")
      ? cleaned
      : cleaned.startsWith("0")
      ? "+254" + cleaned.slice(1)
      : "+254" + cleaned;

    const merchantId = Deno.env.get("SHWARY_MERCHANT_ID");
    const merchantKey = Deno.env.get("SHWARY_MERCHANT_KEY");

    if (!merchantId || !merchantKey) {
      return new Response(
        JSON.stringify({ error: "Payment service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch(
      "https://api.shwary.com/api/v1/merchants/payment/KE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-merchant-id": merchantId,
          "x-merchant-key": merchantKey,
        },
        body: JSON.stringify({
          amount: 2600,
          clientPhoneNumber: formatted,
        }),
      }
    );

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
