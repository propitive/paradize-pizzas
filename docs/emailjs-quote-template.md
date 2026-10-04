# EmailJS template update and local review

The new form uses your existing service (`service_ygalzf6`), template
(`template_suuq3lm`), and public key. The website changes are local; they have
not been deployed to Netlify. No GoHighLevel connection is used.

## Review the website

The current preview is running at http://localhost:3001 (port 3000 was already
in use). To restart it later, run the following in PowerShell in this project:

```powershell
$env:PORT = '3001'
npm.cmd start
```

Click **GET A QUOTE** on the home page or another page. The Contact Us page
also has a button that opens the same form.

1. **Your event:** date or timeframe, approximate guest count, city or area,
   and whether a venue is reserved. Yes reveals required street, state, and
   ZIP fields. No still requires the city/area, date/timeframe, and guest count.
2. **Food preferences:** all optional. Try selecting several options in one
   dropdown and deselecting an option. Next works even without selections and
   preserves any preferences already selected.
3. **Your contact details:** first name, last name, email, and phone.
   Previous lets you revise earlier answers.

Try the X, clicking outside the modal, and Escape. Closing and reopening
preserves the draft while the page stays loaded. Refreshing the page clears
the draft. After a successful send, closing the confirmation clears the form
for a fresh request. Done closes it; View Gallery closes it and opens the gallery.
The modal cannot be dismissed while the email request is pending.

For mobile review, use your browser's device preview at 375px or 390px wide.
Check every step and an open food dropdown. The dialog scrolls inside the
screen and the fields stack into one column.

## Update EmailJS before testing the new email contents

In EmailJS, open **Email Templates → template_suuq3lm → Content**.
Keep **To Email** set to your test mailbox for now and keep the connected
Gmail service. No new template or subscription is necessary.

Suggested subject:

```text
Quote request — {{user-name}} — {{event_date}}
```

The styled body is in [emailjs-quote-template.html](emailjs-quote-template.html).
Open that file in your code editor and copy its entire contents into the
template's HTML/code editor. Copy the source code, rather than the rendered
preview. Keep the existing recipient, sender, subject, and Reply To settings.
Save the template when the body has been replaced.

The design uses a gold accent, a shaded event-details box, three section
headings with emojis, and smaller gray labels above the answers. It keeps
all current fields and the same venue conditions. Inline styles and a
single-column table layout provide a practical email-client baseline;
confirm the final appearance in your recipient's actual inbox.

Sample previews (fake customer details; no email is sent):

- [Venue reserved: Yes](emailjs-preview-venue-yes.html)
- [Venue reserved: No](emailjs-preview-venue-no.html)

To regenerate the previews, run `node scripts/preview-quote-email.cjs`.
The generator checks both conditional branches and unresolved placeholders.
All customer values use double braces, which EmailJS escapes as text.

Set **Reply To** to `{{user-email}}` if you want replies to reach the customer.
Keep the sender tied to your connected Gmail account. Save the template.

The original placeholders still work, but the original email body will not
display the newly added date/timeframe and phone number until you update it.
The form sends `has_venue` as an actual boolean; the text "No" would not work
as a false condition. Changing Yes to No omits previously entered address
details from the email.

## End-to-end email check

Submitting the local preview sends a real email through the existing service
and counts toward your EmailJS allowance. Automated tests mock EmailJS and
do not send emails.

Send two requests labeled **TEST — please ignore**, using contact information
you control:

- Venue Yes: supply a sample address and several food selections. Check that
  all selected items, date, guest count, address, and contact details arrive.
- Venue No: use a general timeframe and city/area and leave food preferences blank.
  Check that there is no reserved-address section and optional choices say
  Not specified.

For a failure, the form keeps the answers and offers a retry. Check EmailJS's
Email History for delivery errors. Successful submission means EmailJS
accepted the request; confirm receipt in the inbox or spam folder too.

Reference: https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/
