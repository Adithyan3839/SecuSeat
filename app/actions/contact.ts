"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required" }
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "secuseat@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // You'll need to set this environment variable
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "secuseat@gmail.com",
      to: "secuseat@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      // Add a text version for email clients that don't support HTML
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
