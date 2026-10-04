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

Replace the email body with the following. Paste this in the template's
HTML/code editor so the conditional tags and paragraph formatting are kept.
All customer values use double braces, which EmailJS escapes as text.

```html
<h2>New Paradize Pizzas quote request</h2>

<h3>Event essentials</h3>
<p><strong>Event date or timeframe:</strong> {{event_date}}</p>
<p><strong>Expected guest count:</strong> {{attendance}}</p>
<p><strong>Event city or area:</strong> {{city}}</p>
<p><strong>Venue reserved:</strong> {{venue_reserved}}</p>

{{#has_venue}}
<h3>Reserved venue address</h3>
<p>{{street_address}}<br>{{city}}, {{state}} {{zip_code}}</p>
{{/has_venue}}
{{^has_venue}}
<p>The customer has not reserved a venue yet. The city or area above is their expected event location.</p>
{{/has_venue}}

<h3>Client information</h3>
<p><strong>Full name:</strong> {{user-name}}</p>
<p><strong>Email:</strong> {{user-email}}</p>
<p><strong>Phone number:</strong> {{phone}}</p>

<h3>Food preferences (optional)</h3>
<p><strong>Appetizers:</strong> {{appetizers}}</p>
<p><strong>Salads:</strong> {{salads}}</p>
<p><strong>Desserts:</strong> {{desserts}}</p>
<p><strong>Pastas:</strong> {{pastas}}</p>
<p><strong>Charcuterie board:</strong> {{charcuterie}}</p>
<p><strong>Glazing table:</strong> {{glazing}}</p>
```

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
