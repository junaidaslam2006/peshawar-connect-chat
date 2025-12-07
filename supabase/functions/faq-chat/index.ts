import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const FAQ_DATA = `
University of Peshawar FAQ Knowledge Base:

ADMISSIONS:
- Programs: Bachelor's, Master's, MPhil, and PhD in Arts, Science, Commerce, Law, Pharmacy, Islamic Studies
- Eligibility: Bachelor's requires HSSC/FSc, Master's needs Bachelor's in relevant field
- Admission opens: August (fall) and January (spring)
- Apply online through admission portal at uop.edu.pk
- Documents needed: Matric, FSc/HSSC, Bachelor's certificates, CNIC/Form-B, domicile, photos, fee challan
- Foreign students: Must submit IBCC equivalence and follow HEC guidelines
- Only one regular program enrollment allowed at a time

FEES & SCHOLARSHIPS:
- BS programs: PKR 15,000-30,000/semester (varies by department)
- Payment: Bank challan (HBL, NBP) or online banking
- Scholarships: HEC Need-Based, Merit-Based, departmental scholarships
- Apply at Financial Aid Office with income certificates and transcripts
- Fee waivers available for deserving students
- Refunds processed within 15 days if requested before semester starts

ACADEMICS:
- Fall semester: August-December, Spring: January-May
- CGPA system (4.0 scale): A=4.0, B=3.0, C=2.0, D=1.0, F=0
- Minimum 2.0 CGPA required for good standing
- 75% attendance mandatory per course
- Exams: Mid-term (30%), assignments/quizzes (20%), final (50%)
- Department change possible within first semester
- 5-6 courses (15-18 credit hours) per semester
- Re-evaluation within 15 days of result with required fee

HOSTEL & TRANSPORT:
- Apply at Provost Office at academic year start
- Priority for out-of-district students
- Fee: PKR 8,000-15,000/semester
- Facilities: Mess, Wi-Fi, common room, 24/7 security
- Separate hostels for boys and girls
- In-time: 10 PM (girls), 11 PM (boys)
- Bus service: PKR 3,000-5,000/semester

IT SUPPORT:
- University email (@uop.edu.pk) after enrollment
- Portal: portal.uop.edu.pk (registration number as username)
- Free Wi-Fi (UOP-WiFi) across campus
- Digital library: library.uop.edu.pk
- IT Department at IT Building, Ground Floor
- Email: it.support@uop.edu.pk

STUDENT SERVICES:
- Registrar's Office: Administration Block, 8 AM-4 PM
- ID cards from Student Affairs Office
- Transcripts: Examination Department (7-10 days)
- Counseling: Student Counseling Center (free, confidential)
- Clubs: Debating, Drama, Sports, Cultural
- Medical Center near main library (free basic healthcare)
- Character certificate: 3-5 working days
- Migration certificate: 15-20 working days
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing FAQ question:", message);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are the official FAQ Assistant for University of Peshawar, Pakistan. You ONLY answer questions related to the university using the knowledge base provided below. 

IMPORTANT RULES:
1. Only answer questions about University of Peshawar based on the FAQ data provided
2. If a question is not related to the university or not in your knowledge base, politely redirect: "I can only help with University of Peshawar related questions. Please ask about admissions, fees, academics, hostels, IT support, or student services."
3. Be friendly, professional, and concise
4. Use Pakistani context (PKR currency, local terms)
5. Include relevant contact information when helpful
6. If unsure, suggest contacting the relevant office directly

${FAQ_DATA}`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to get AI response");
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "I apologize, I couldn't process your question. Please try again.";

    console.log("FAQ response generated successfully");

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in faq-chat function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        response: "I apologize, but I'm having trouble responding right now. Please try again or contact the university directly at info@uop.edu.pk for assistance."
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
