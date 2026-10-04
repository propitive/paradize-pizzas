export const createEmptyQuote = () => ({
  eventDate: "", attendance: "", city: "", venueReserved: "", street: "", state: "", zip: "",
  firstName: "", lastName: "", email: "", phone: "",
  pizzas: [], appetizers: [], salads: [], desserts: [], pastas: [],
  charcuterie: null, glazing: null,
});

export function buildQuoteEmail(quote) {
  const hasVenue = quote.venueReserved === "Yes";
  const clean = (value) => value.trim();
  const city = clean(quote.city);
  const location = hasVenue
    ? [quote.street, quote.city, quote.state, quote.zip].map(clean).filter(Boolean).join(", ")
    : `${city} (venue not reserved yet)`;
  return {
    // Keep the original names so the existing template remains compatible.
    "user-name": `${clean(quote.firstName)} ${clean(quote.lastName)}`,
    "user-email": clean(quote.email),
    first_name: clean(quote.firstName), last_name: clean(quote.lastName),
    phone: clean(quote.phone), event_date: clean(quote.eventDate),
    attendance: quote.attendance, location, city,
    venue_reserved: hasVenue ? "Yes" : "No", has_venue: hasVenue,
    // Omit stale address answers if the customer changes Yes to No.
    street_address: hasVenue ? clean(quote.street) : "",
    state: hasVenue ? clean(quote.state) : "",
    zip_code: hasVenue ? clean(quote.zip) : "",
    ...Object.fromEntries(["pizzas", "appetizers", "salads", "desserts", "pastas"].map(
      (name) => [name, quote[name].map((option) => option.label).join(", ") || "Not specified"]
    )),
    charcuterie: quote.charcuterie?.value || "Not specified",
    glazing: quote.glazing?.value || "Not specified",
  };
}
