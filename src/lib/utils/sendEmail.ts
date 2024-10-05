import type { ContactEmail } from '$lib/types/email';
import { emailClient } from '$lib/server/postmark';
import { FROM_EMAIL, TO_EMAIL } from '$env/static/private';

export const sendEmail = async (emailData: ContactEmail) => {
	const htmlBody = `
    <html>
      <body>
        <table border="1" cellpadding="5" cellspacing="0">
          <tr>
            <th>First Name</th>
            <td>${emailData.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>${emailData.lastName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${emailData.email}</td>
          </tr>
          <tr>
            <th>Details</th>
            <td>${emailData.details}</td>
          </tr>
        </table>
      </body>
    </html>
  `;

	await emailClient.sendEmail({
		From: FROM_EMAIL,
		To: TO_EMAIL,
		Subject: 'New Email from Website',
		HtmlBody: htmlBody // Use HTML body for the table
	});
};
