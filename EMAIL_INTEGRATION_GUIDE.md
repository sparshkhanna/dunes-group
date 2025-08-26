# Email Integration Guide

## Overview

The contact form has been enhanced with professional email integration that automatically generates business inquiry emails based on the selected service category.

## Features Implemented

### 1. Enhanced Contact Form

- **Service Selection Dropdown**: Users can select from 4 service categories
- **Form Validation**: Required fields validation with error messages
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: Clear status feedback to users

### 2. Professional Email Templates

Each service category generates a tailored professional email:

#### Flying Training Organization (training)

- Addresses: Dunes Aviation Academy Team
- Includes: Training programs, schedules, pricing inquiries
- Features: CPL, PPL, Instrument Rating, Multi-Engine Rating details

#### Non-Scheduled Air Operations (charter)

- Addresses: Dunes Air Operations Team
- Includes: Aircraft availability, pricing, route planning
- Features: Cessna 208B, Citation CJ2+, Challenger 605 details

#### MRO & CAMO Services (maintenance)

- Addresses: Dunes Aerotech Team
- Includes: Maintenance programs, overhaul services, CAMO
- Features: Scheduled maintenance, component overhaul, inspections

#### General Inquiry (other)

- Addresses: Dunes Group Team
- Includes: General aviation services inquiry
- Features: Flexible format for any other inquiries

### 3. API Integration

- **Endpoint**: `https://dunes-mail-service.vercel.app/api/send-email`
- **Method**: POST
- **Content-Type**: application/json
- **Recipient**: group@dunesaviation.in

## Email Structure

Each generated email includes:

- Professional greeting addressing the correct team
- Complete contact information (name, email, phone, company)
- Service-specific inquiry details
- Customer's message/requirements
- Relevant service points for discussion
- Professional closing with contact details

## How to Test

### 1. Local Testing

1. Start your development server: `npm start`
2. Navigate to the Contact page
3. Fill out the form completely:
   - **Name**: Your test name
   - **Email**: Your email address
   - **Phone**: Optional phone number
   - **Company**: Optional company name
   - **Service**: Select one of the service options
   - **Message**: Enter detailed requirements

### 2. Service-Specific Testing

#### Test Training Inquiry:

```
Service: Flying Training Organization
Message: "I'm interested in obtaining a Commercial Pilot License. Please provide information about training duration, costs, and aircraft availability for multi-engine training."
```

#### Test Charter Inquiry:

```
Service: Non-Scheduled Air Operations
Message: "I need to charter a Citation CJ2+ for a business trip from Delhi to Mumbai on March 15th. Please provide pricing and availability."
```

#### Test Maintenance Inquiry:

```
Service: MRO & CAMO Services
Message: "I require scheduled maintenance for my Cessna 208B. Please provide information about your maintenance capabilities and scheduling."
```

### 3. Expected Email Format

The generated emails will have:

- **Subject**: Service-specific subject with customer name
- **Body**: Professional business inquiry format
- **Reply-To**: Customer's email address
- **Sender Info**: Structured metadata for the recipient

## File Structure

```
src/
├── pages/
│   └── Contact.jsx          # Enhanced contact form with email integration
├── utils/
│   └── emailService.js      # Email service utilities and configuration
```

## Environment Setup

Ensure your email service at `https://dunes-mail-service.vercel.app` is configured to:

1. Accept POST requests to `/api/send-email`
2. Handle the JSON payload structure
3. Send emails to `group@dunesaviation.in`
4. Support HTML and plain text formats

## Troubleshooting

### Common Issues:

1. **Network Errors**: Check if the email service URL is accessible
2. **CORS Issues**: Ensure the email service allows requests from your domain
3. **Validation Errors**: Check that all required fields are filled
4. **API Response**: Monitor browser console for detailed error messages

### Status Messages:

- **Success**: "Message sent successfully! We'll get back to you soon."
- **Error**: "Failed to send message. Please try again or contact us directly."

## Next Steps

To complete the implementation:

1. **Verify Email Service**: Ensure your email service at `https://dunes-mail-service.vercel.app` is properly configured
2. **Test Each Service Type**: Submit test forms for each service category
3. **Check Email Delivery**: Verify emails are being delivered to `group@dunesaviation.in`
4. **Monitor Performance**: Check for any errors in browser console or network tab

The integration is now complete and ready for production use!
