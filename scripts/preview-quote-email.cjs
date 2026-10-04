// Generate local sample previews only. This script never contacts EmailJS.
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const docs = path.join(__dirname, "..", "docs");
const template = fs.readFileSync(path.join(docs, "emailjs-quote-template.html"), "utf8");
const escape = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

for (const hasVenue of [true, false]) {
  const values = {
    has_venue: hasVenue, venue_reserved: hasVenue ? "Yes" : "No",
    event_date: "A Saturday in November", attendance: "100", city: "Dallas",
    street_address: hasVenue ? "123 Main St." : "", state: hasVenue ? "TX" : "",
    zip_code: hasVenue ? "75128" : "", "user-name": "Jane Sample",
    "user-email": "jane@example.com", phone: "(469) 555-0100",
    appetizers: "Sausage Lollipop, Chicken Bacon Wrap", salads: "House Salad",
    desserts: "Not specified", pastas: "Chicken Alfredo", charcuterie: "Yes", glazing: "No",
  };
  // Render the exact conditional subset used by this template, with escaped values.
  const html = template
    .replace(/{{#has_venue}}([\s\S]*?){{\/has_venue}}/g, (_, content) => hasVenue ? content : "")
    .replace(/{{\^has_venue}}([\s\S]*?){{\/has_venue}}/g, (_, content) => hasVenue ? "" : content)
    .replace(/{{([\w-]+)}}/g, (_, key) => {
      assert(Object.prototype.hasOwnProperty.call(values, key), `Missing sample value: ${key}`);
      return escape(values[key]);
    });
  assert(!html.includes("{{"), "Unresolved template tags");
  assert.strictEqual(html.includes("Reserved Venue Address"), hasVenue);
  assert.strictEqual(html.includes("123 Main St."), hasVenue);
  assert.strictEqual(html.includes("A venue has not been reserved yet."), !hasVenue);
  for (const tag of ["table", "tr", "td"]) {
    assert.strictEqual((html.match(new RegExp(`<${tag}\\b`, "g")) || []).length,
      (html.match(new RegExp(`</${tag}>`, "g")) || []).length, `Unbalanced ${tag}`);
  }
  const preview = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Quote email preview — venue ${hasVenue ? "Yes" : "No"}</title></head><body style="margin:0;background:#f5f0f0;"><p style="text-align:center;font:13px Arial,sans-serif;color:#766d64;padding:12px;">Sample preview — venue reserved: ${hasVenue ? "Yes" : "No"}. No email was sent.</p>${html}</body></html>`;
  const file = `emailjs-preview-venue-${hasVenue ? "yes" : "no"}.html`;
  fs.writeFileSync(path.join(docs, file), preview, "utf8");
  console.log(`Created ${file}; conditional content and table structure checked.`);
}
