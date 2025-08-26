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
      replyTo: emailData.replyTo,
      isHtml: emailData.isHtml || false,
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

  const htmlBody = `
    <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff;">
      
      <!-- Header -->
      <div style="background-color: #ffffff; padding: 40px 40px 30px; border-bottom: 1px solid #e5e7eb;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://www.dunesgroup.in/dunes-group-logo.png" alt="Dunes Aviation Logo" style="max-width: 180px; height: auto;">
        </div>
        <h1 style="color: #111827; margin: 0; font-size: 24px; font-weight: 600; text-align: center; letter-spacing: -0.025em;">
          New Contact Inquiry
        </h1>
      </div>
      
      <!-- Service Type -->
      <div style="padding: 30px 40px 0; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <span style="display: inline-block; background-color: #f3f4f6; color: #374151; padding: 8px 20px; border-radius: 6px; font-weight: 500; font-size: 14px; letter-spacing: 0.025em; text-transform: uppercase;">
            ${serviceName}
          </span>
        </div>
        
        <!-- Client Information -->
        <div style="background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #e5e7eb;">
          <h2 style="color: #111827; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">
            Contact Details
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #6b7280; width: 30%;">
                Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 500;">
                ${fullName}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #6b7280;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                <a href="mailto:${
                  formData.email
                }" style="color: #2563eb; text-decoration: none;">${
    formData.email
  }</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 500; color: #6b7280;">
                Service
              </td>
              <td style="padding: 12px 0; color: #111827; font-weight: 500;">
                ${serviceName}
              </td>
            </tr>
          </table>
        </div>
        
        <!-- Message -->
        <div style="margin-bottom: 40px;">
          <h3 style="color: #111827; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
            Message
          </h3>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
            <p style="white-space: pre-wrap; color: #374151; font-size: 15px; line-height: 1.6; margin: 0;">
              ${formData.message}
            </p>
          </div>
        </div>
        
        <!-- Action Button -->
        <div style="text-align: center; margin-bottom: 40px;">
          <a href="mailto:${
            formData.email
          }?subject=Re: ${serviceName} Inquiry&body=Dear ${fullName},%0A%0AThank you for your interest in our ${serviceName.toLowerCase()}. We would be pleased to discuss your requirements.%0A%0ABest regards,%0ADunes Aviation Team" 
             style="display: inline-block; background-color: #111827; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 14px;">
            Reply to Inquiry
          </a>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f9fafb; text-align: center; color: #6b7280; font-size: 13px; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0 0 8px 0;">
          Submitted via <a href="https://www.dunesgroup.in" style="color: #2563eb; text-decoration: none;">dunesgroup.in</a>
        </p>
        <p style="margin: 0; color: #9ca3af;">
          ${new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })} at ${new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}
        </p>
      </div>
    </div>
  `.trim();

  return {
    subject,
    body: htmlBody,
    replyTo: formData.email,
    isHtml: true,
  };
};
