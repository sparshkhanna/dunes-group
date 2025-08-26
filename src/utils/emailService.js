// Frontend Email Service - Simplified for Contact Form
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
const DEFAULT_RECIPIENT = "group@dunesaviation.in";

/**
 * Send contact form email via backend API
 */
export const sendContactEmail = async (emailData) => {
  const url = `${API_BASE_URL}/api/email/send`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: emailData.subject,
      body: emailData.body,
    }),
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Network error" }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
};

/**
 * Check if email service is available
 */
export const checkEmailHealth = async () => {
  try {
    const url = `${API_BASE_URL}/api/email/health`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.success;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Fallback: Open default email client
 */
export const openEmailClient = (emailData) => {
  const subject = encodeURIComponent(
    emailData.subject || "Contact Form Submission"
  );
  const body = encodeURIComponent(emailData.body || "");
  const mailtoUrl = `mailto:${DEFAULT_RECIPIENT}?subject=${subject}&body=${body}`;
  window.open(mailtoUrl, "_blank");
};

/**
 * Generate email content from form data
 */
export const generateEmailContent = (formData) => {
  const serviceLabels = {
    training: "Pilot Training",
    charter: "Charter Services",
    maintenance: "Maintenance & MRO",
    other: "General Inquiry",
  };

  const serviceName = serviceLabels[formData.service] || "General Inquiry";
  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  const subject = `${serviceName} Inquiry - ${fullName}`;

  const body = `
New contact form submission from Dunes Aviation website:

Name: ${fullName}
Email: ${formData.email}
Service Interest: ${serviceName}

Message:
${formData.message}

---
Submitted via Dunes Aviation website contact form
Time: ${new Date().toLocaleString()}
    `.trim();

  return { subject, body };
};
