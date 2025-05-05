# SecuSeat Website

## Email Setup for Contact Form

To enable email functionality for the contact form, you need to set up the following:

1. Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   EMAIL_USER=secuseat@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   \`\`\`

2. For the `EMAIL_PASSWORD`, you need to generate an "App Password" from your Google account:
   - Go to your Google Account settings
   - Navigate to Security
   - Under "Signing in to Google," select "App passwords" (you may need to enable 2-Step Verification first)
   - Select "Mail" as the app and "Other" as the device
   - Enter "SecuSeat Website" as the name
   - Google will generate an app password for you to use

3. Replace `your_app_password_here` in the `.env.local` file with the generated app password

4. Make sure to add the `.env.local` file to your `.gitignore` to keep your credentials secure

## Running the Website

\`\`\`bash
# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
