"use server"

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

    // For now, we'll just log the form data and return success
    // In a production environment, you would save this to a database
    console.log("Contact form submission:", { name, email, subject, message })

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
