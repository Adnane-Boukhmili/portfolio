// Vercel serverless endpoint.
// Required environment variables:
// RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const {name,email,subject,message}=req.body||{};
  if(!name||!email||!subject||!message) return res.status(400).json({error:"Missing fields"});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:"Invalid email"});
  const {RESEND_API_KEY,CONTACT_TO_EMAIL,CONTACT_FROM_EMAIL}=process.env;
  if(!RESEND_API_KEY||!CONTACT_TO_EMAIL||!CONTACT_FROM_EMAIL) return res.status(503).json({error:"Email service is not configured"});
  const safe=(s)=>String(s).replace(/[<>]/g,"");
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${RESEND_API_KEY}`,"Content-Type":"application/json"},body:JSON.stringify({
    from:CONTACT_FROM_EMAIL,to:[CONTACT_TO_EMAIL],reply_to:email,subject:`Portfolio: ${safe(subject)}`,
    text:`Name: ${safe(name)}\nEmail: ${safe(email)}\n\n${safe(message)}`
  })});
  if(!response.ok) return res.status(502).json({error:"Email provider error"});
  return res.status(200).json({ok:true});
}
