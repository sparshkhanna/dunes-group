// Frontend Email Service - Enhanced with HTML Templates
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
const DEFAULT_RECIPIENT = 'group@dunesaviation.in';

/**
 * Send contact form email via backend API
 */
export const sendContactEmail = async (emailData) => {
    const url = `${API_BASE_URL}/api/email/send`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subject: emailData.subject,
            body: emailData.body,
            html: emailData.html // Added HTML support
        }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Network error' }));
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
    const subject = encodeURIComponent(emailData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(emailData.body || '');
    const mailtoUrl = `mailto:${DEFAULT_RECIPIENT}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
};

/**
 * Generate HTML email template
 */
const generateHTMLTemplate = (formData, serviceName, fullName) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission - Dunes Aviation</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 30px 20px; text-align: center;">
                <div style="background-color: #ffffff; display: inline-block; padding: 20px 30px; border-radius: 15px; margin-bottom: 15px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
                    <img src="https://dunesgroup.in/dunes-group-logo.png" 
                         alt="Dunes Group Logo" 
                         style="height: 60px; width: auto; display: block; margin: 0 auto;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <h1 style="margin: 10px 0 0 0; color: #1e3c72; font-size: 24px; font-weight: 700; display: none;">
                        ✈️ DUNES AVIATION
                    </h1>
                </div>
                <p style="margin: 0; color: #ffffff; font-size: 16px; opacity: 0.9;">
                    Nurturing Careers Beyond Sky
                </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
                
                <!-- Alert Banner -->
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                        🎯 New ${serviceName} Inquiry Received
                    </h2>
                </div>

                <!-- Customer Information Card -->
                <div style="background-color: #f8fafe; border-left: 4px solid #1e3c72; padding: 25px; margin-bottom: 25px; border-radius: 0 8px 8px 0;">
                    <h3 style="margin: 0 0 20px 0; color: #1e3c72; font-size: 18px; font-weight: 600;">
                        👤 Customer Information
                    </h3>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                        <div style="flex: 1; min-width: 200px;">
                            <div style="margin-bottom: 12px;">
                                <strong style="color: #2c5282; display: inline-block; width: 100px;">Name:</strong>
                                <span style="color: #4a5568; font-weight: 500;">${fullName}</span>
                            </div>
                            <div style="margin-bottom: 12px;">
                                <strong style="color: #2c5282; display: inline-block; width: 100px;">Email:</strong>
                                <a href="mailto:${formData.email}" style="color: #3182ce; text-decoration: none; font-weight: 500;">${formData.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Service Interest -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                    <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">
                        🛩️ Service Interest
                    </h3>
                    <p style="margin: 0; font-size: 18px; font-weight: 600;">
                        ${serviceName}
                    </p>
                </div>

                <!-- Message Section -->
                <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                    <h3 style="margin: 0 0 15px 0; color: #1e3c72; font-size: 16px; font-weight: 600;">
                        💬 Customer Message
                    </h3>
                    <div style="background-color: #f7fafc; padding: 20px; border-radius: 6px; border-left: 3px solid #4299e1;">
                        <p style="margin: 0; color: #4a5568; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div style="text-align: center; margin: 30px 0;">
                    <a href="mailto:${formData.email}?subject=Re: ${serviceName} Inquiry" 
                       style="display: inline-block; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 0; box-shadow: 0 4px 12px rgba(30, 60, 114, 0.3);">
                        ✉️ Reply to Customer
                    </a>
                    <a href="tel:+91-${formData.phone || 'N/A'}" 
                       style="display: inline-block; background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 0; box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);">
                        📞 Call Customer
                    </a>
                </div>

            </div>

            <!-- Footer Section -->
            <div style="background-color: #1a202c; padding: 25px 30px; text-align: center;">
                <div style="border-bottom: 1px solid #2d3748; padding-bottom: 20px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; color: #ffffff; font-size: 16px;">Dunes Aviation Academy</h4>
                    <p style="margin: 0; color: #a0aec0; font-size: 14px;">World-class flying training with state-of-the-art infrastructure</p>
                </div>
                
                <div style="color: #718096; font-size: 13px;">
                    <p style="margin: 0 0 5px 0;">📧 Email: group@dunesaviation.in</p>
                    <p style="margin: 0 0 5px 0;">🌐 Website: www.dunesgroup.in</p>
                    <p style="margin: 0 0 15px 0;">📍 Bhavnagar Airport, Gujarat, India</p>
                    
                    <div style="border-top: 1px solid #2d3748; padding-top: 15px;">
                        <p style="margin: 0; font-size: 12px; color: #4a5568;">
                            📅 Submitted: ${currentDate}<br>
                            🔗 Source: Dunes Aviation Website Contact Form
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </body>
    </html>
    `;
};

/**
 * Generate email content from form data - Enhanced with HTML
 */
export const generateEmailContent = (formData) => {
    const serviceLabels = {
        training: 'Pilot Training',
        charter: 'Charter Services',
        maintenance: 'Maintenance & MRO',
        other: 'General Inquiry'
    };

    const serviceName = serviceLabels[formData.service] || 'General Inquiry';
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const subject = `${serviceName} Inquiry - ${fullName}`;

    // Plain text version (fallback)
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

    // HTML version (enhanced)
    const html = generateHTMLTemplate(formData, serviceName, fullName);

    return { subject, body, html };
};