// Web3Forms access key — sign up at https://web3forms.com with info@rancotechnology.com to get your key,
// then paste it below. Until then, submissions are only saved to the Google Sheet (no email is sent).
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz0_QnjRGpJm3PtmZ2-nbp75H_Xqy_U-rss_7okFFiCmGEjLhAJpnu_c8-E-bTD49a2NQ/exec";

const hasWeb3FormsKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith("YOUR_");

// Apps Script doesn't return CORS headers we can rely on, so send it as an opaque
// request: it rejects on network failure, but the response itself can't be read.
const saveToSheet = (fields) => {
  const body = new FormData();
  Object.entries(fields).forEach(([k, v]) => body.append(k, v));
  return fetch(GOOGLE_SHEET_URL, { method: "POST", body, mode: "no-cors" });
};

const sendEmail = async (fields, subject) => {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: fields.name || "Website visitor", ...fields }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || `Web3Forms responded with ${res.status}`);
  }
};

// Resolves only once the lead has actually been handed off; throws otherwise so the UI can show an error.
export const submitLead = async (fields, subject) => {
  const sheet = saveToSheet(fields);

  if (!hasWeb3FormsKey) {
    await sheet;
    return;
  }

  sheet.catch(() => {});
  await sendEmail(fields, subject);
};
