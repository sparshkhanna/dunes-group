// Frontend Email Service - Enhanced with HTML Templates
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
const DEFAULT_RECIPIENT = "group@dunesaviation.in";

/**
 * Send contact form email via backend API
 */
export const sendContactEmail = async (formData) => {
  const emailContent = generateEmailContent(formData);

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: emailContent.subject,
        body: emailContent.body,
        from: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        html: emailContent.html,
      }),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: "Network error" }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
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
 * Generate HTML email template
 */
const generateHTMLTemplate = (formData, serviceName, fullName) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get urgency level based on service type
  const getUrgencyInfo = (service) => {
    const urgencyMap = {
      training: {
        level: "HIGH",
        color: "#e53e3e",
        text: "Training Inquiry - Immediate Response Required",
      },
      charter: {
        level: "URGENT",
        color: "#d69e2e",
        text: "Charter Request - Time Sensitive",
      },
      maintenance: {
        level: "MEDIUM",
        color: "#3182ce",
        text: "Maintenance Inquiry - Follow Up Soon",
      },
      other: {
        level: "NORMAL",
        color: "#38a169",
        text: "General Inquiry - Standard Response",
      },
    };
    return urgencyMap[formData.service] || urgencyMap.other;
  };

  const urgencyInfo = getUrgencyInfo(formData.service);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Customer Inquiry - Dunes Aviation</title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f4f8; line-height: 1.6;">
        <div style="max-width: 650px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);">
            
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 35px 25px; text-align: center; position: relative;">
                <!-- Decorative Elements -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grain%22 width=%224%22 height=%224%22 patternUnits=%22userSpaceOnUse%22><circle cx=%222%22 cy=%222%22 r=%221%22 fill=%22%23ffffff%22 opacity=%220.03%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grain)%22/></svg>'); opacity: 0.1;"></div>
                
                <div style="background-color: #ffffff; display: inline-block; padding: 25px 35px; border-radius: 20px; margin-bottom: 20px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); position: relative;">
                    <img src="https://dunesgroup.in/dunes-group-logo.png" 
                         alt="Dunes Group Logo" 
                         style="height: 70px; width: auto; display: block; margin: 0 auto;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <h1 style="margin: 15px 0 0 0; color: #1e3c72; font-size: 28px; font-weight: 700; display: none;">
                        ✈️ DUNES AVIATION
                    </h1>
                </div>
                
                <div style="position: relative;">
                    <h2 style="margin: 0 0 8px 0; color: #ffffff; font-size: 24px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                        New Customer Inquiry
                    </h2>
                    <p style="margin: 0; color: #ffffff; font-size: 16px; opacity: 0.95; font-weight: 500;">
                        Nurturing Careers Beyond Sky
                    </p>
                </div>
            </div>

            <!-- Urgency Alert -->
            <div style="background-color: ${
              urgencyInfo.color
            }; background: linear-gradient(135deg, ${urgencyInfo.color} 0%, ${
    urgencyInfo.color
  }dd 100%); padding: 18px 25px; text-align: center; border-bottom: 3px solid ${
    urgencyInfo.color
  };">
                <div style="display: inline-flex; align-items: center; background: rgba(255,255,255,0.15); padding: 8px 16px; border-radius: 25px; backdrop-filter: blur(10px);">
                    <span style="background: #ffffff; color: ${
                      urgencyInfo.color
                    }; padding: 4px 12px; border-radius: 15px; font-weight: 700; font-size: 12px; margin-right: 10px;">
                        ${urgencyInfo.level} PRIORITY
                    </span>
                    <span style="color: #ffffff; font-weight: 600; font-size: 14px;">
                        ${urgencyInfo.text}
                    </span>
                </div>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
                
                <!-- Customer Spotlight -->
                <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border: 2px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 30px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -50%; right: -50%; width: 200px; height: 200px; background: radial-gradient(circle, rgba(30,60,114,0.05) 0%, transparent 70%); border-radius: 50%;"></div>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; box-shadow: 0 6px 20px rgba(30, 60, 114, 0.3);">
                            <span style="color: #ffffff; font-size: 24px; font-weight: bold;">👤</span>
                        </div>
                        <div>
                            <h3 style="margin: 0 0 5px 0; color: #1e3c72; font-size: 24px; font-weight: 700;">
                                ${fullName || "New Customer"}
                            </h3>
                            <p style="margin: 0; color: #4a5568; font-size: 16px; font-weight: 500;">
                                Interested in ${serviceName}
                            </p>
                        </div>
                    </div>
                    
                    <div style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
                        <div style="display: grid; gap: 15px;">
                            <div style="display: flex; align-items: center;">
                                <span style="background: #e6fffa; color: #0d9488; padding: 8px; border-radius: 8px; margin-right: 15px; font-size: 16px;">📧</span>
                                <div>
                                    <strong style="color: #2d3748; font-size: 14px; display: block;">Email Address</strong>
                                    <a href="mailto:${
                                      formData.email
                                    }" style="color: #1e3c72; font-size: 16px; font-weight: 600; text-decoration: none;">${
    formData.email
  }</a>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center;">
                                <span style="background: #fef7e0; color: #a16207; padding: 8px; border-radius: 8px; margin-right: 15px; font-size: 16px;">🎯</span>
                                <div>
                                    <strong style="color: #2d3748; font-size: 14px; display: block;">Service Category</strong>
                                    <span style="color: #4a5568; font-size: 16px; font-weight: 600;">${serviceName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Message Spotlight -->
                <div style="background: #ffffff; border: 2px solid #e2e8f0; border-radius: 16px; padding: 30px; margin-bottom: 35px; position: relative;">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #1e3c72, #2a5298, #667eea); border-radius: 16px 16px 0 0;"></div>
                    
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px; border-radius: 12px; margin-right: 15px; font-size: 20px;">💬</span>
                        <h3 style="margin: 0; color: #1e3c72; font-size: 20px; font-weight: 700;">Customer Message</h3>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #667eea; position: relative;">
                        <p style="margin: 0; color: #2d3748; font-size: 16px; line-height: 1.8; white-space: pre-wrap; font-weight: 500;">${
                          formData.message
                        }</p>
                        <div style="position: absolute; top: 15px; right: 15px; color: #667eea; font-size: 24px; opacity: 0.3;">"</div>
                    </div>
                </div>

                <!-- Action Center -->
                <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 16px; padding: 35px; text-align: center; margin-bottom: 30px; position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -100px; left: -100px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); border-radius: 50%;"></div>
                    
                    <h3 style="margin: 0 0 25px 0; color: #ffffff; font-size: 22px; font-weight: 700;">
                        🚀 Ready to Respond?
                    </h3>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-bottom: 20px;">
                        <a href="mailto:${
                          formData.email
                        }?subject=Re: ${serviceName} Inquiry - Dunes Aviation Response&body=Dear ${fullName},%0D%0A%0D%0AThank you for your interest in our ${serviceName}. We're excited to help you on your aviation journey.%0D%0A%0D%0ABest regards,%0D%0ADunes Aviation Team" 
                           style="display: inline-flex; align-items: center; background: #ffffff; color: #1e3c72; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: 700; margin: 5px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); transition: all 0.3s ease;">
                            <span style="margin-right: 10px; font-size: 18px;">✉️</span>
                            <span>Send Professional Reply</span>
                        </a>
                        <a href="tel:+91-96101-60999" 
                           style="display: inline-flex; align-items: center; background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: 700; margin: 5px; backdrop-filter: blur(10px); border: 2px solid rgba(255, 255, 255, 0.2);">
                            <span style="margin-right: 10px; font-size: 18px;">📞</span>
                            <span>Call Customer Now</span>
                        </a>
                    </div>
                    
                    <div style="background: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 15px; backdrop-filter: blur(10px);">
                        <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">
                            ⚡ Quick tip: Responding within 2 hours increases conversion by 60%
                        </p>
                    </div>
                </div>

                <!-- Service Info Card -->
                <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 6px solid #0284c7; border-radius: 0 12px 12px 0; padding: 25px; margin-bottom: 25px;">
                    <h4 style="margin: 0 0 15px 0; color: #0c4a6e; font-size: 18px; font-weight: 700;">
                        📋 Service Details & Next Steps
                    </h4>
                    <div style="color: #075985; font-size: 15px; line-height: 1.7;">
                        <p style="margin: 0 0 10px 0;"><strong>Service Category:</strong> ${serviceName}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Priority Level:</strong> ${
                          urgencyInfo.level
                        }</p>
                        <p style="margin: 0 0 10px 0;"><strong>Recommended Response:</strong> Within 2-4 hours</p>
                        <p style="margin: 0;"><strong>Follow-up Schedule:</strong> 24 hours if no initial response</p>
                    </div>
                </div>

            </div>

            <!-- Enhanced Footer -->
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 35px 30px; position: relative;">
                <div style="text-align: center; border-bottom: 1px solid #334155; padding-bottom: 25px; margin-bottom: 25px;">
                    <h4 style="margin: 0 0 12px 0; color: #ffffff; font-size: 20px; font-weight: 700;">Dunes Aviation Academy</h4>
                    <p style="margin: 0 0 15px 0; color: #cbd5e1; font-size: 16px; font-weight: 500;">World-class flying training with state-of-the-art infrastructure</p>
                    
                    <!-- Contact Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 25px;">
                        <div style="text-align: center;">
                            <div style="background: rgba(217, 172, 64, 0.1); display: inline-block; padding: 10px; border-radius: 50%; margin-bottom: 8px;">
                                <span style="color: #D9AC40; font-size: 18px;">📧</span>
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Email</p>
                            <p style="margin: 5px 0 0 0; color: #ffffff; font-weight: 600;">group@dunesaviation.in</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="background: rgba(217, 172, 64, 0.1); display: inline-block; padding: 10px; border-radius: 50%; margin-bottom: 8px;">
                                <span style="color: #D9AC40; font-size: 18px;">📞</span>
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Phone</p>
                            <p style="margin: 5px 0 0 0; color: #ffffff; font-weight: 600;">+91 96101 60999</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="background: rgba(217, 172, 64, 0.1); display: inline-block; padding: 10px; border-radius: 50%; margin-bottom: 8px;">
                                <span style="color: #D9AC40; font-size: 18px;">🌐</span>
                            </div>
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Website</p>
                            <p style="margin: 5px 0 0 0; color: #ffffff; font-weight: 600;">www.dunesgroup.in</p>
                        </div>
                    </div>
                </div>
                
                <!-- Meta Information -->
                <div style="text-align: center; color: #64748b; font-size: 13px;">
                    <div style="background: rgba(100, 116, 139, 0.1); border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                        <p style="margin: 0 0 5px 0;"><strong>📅 Inquiry Received:</strong> ${currentDate}</p>
                        <p style="margin: 0 0 5px 0;"><strong>📍 Flying Bases:</strong> Ahmedabad | Bhavnagar | Bhilwara</p>
                        <p style="margin: 0;"><strong>🔗 Source:</strong> Official Website Contact Form</p>
                    </div>
                    <p style="margin: 0; font-size: 12px; opacity: 0.8;">
                        This email was automatically generated from your Dunes Aviation website contact form.
                    </p>
                </div>
            </div>

        </div>
        
        <!-- Email Client Compatibility -->
        <!--[if mso]>
        <table width="650" cellpadding="0" cellspacing="0" border="0" style="margin: 20px auto;">
            <tr><td style="padding: 20px; background-color: #f0f4f8; font-family: Arial, sans-serif;">
                <h2 style="color: #1e3c72;">New Customer Inquiry - Dunes Aviation</h2>
                <p><strong>Customer:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Service:</strong> ${serviceName}</p>
                <p><strong>Message:</strong> ${formData.message}</p>
                <p><a href="mailto:${formData.email}">Reply to Customer</a></p>
            </td></tr>
        </table>
        <![endif]-->
    </body>
    </html>
    `;
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

  const html = generateHTMLTemplate(formData, serviceName, fullName);

  // Plain text fallback
  const body = `
New Inquiry from Dunes Aviation Website

Name: ${fullName}
Email: ${formData.email}
Service: ${serviceName}

Message:
${formData.message}

Sent via website contact form
Date: ${new Date().toLocaleString()}
  `.trim();

  return {
    subject,
    body,
    html,
    email: formData.email,
  };
};
