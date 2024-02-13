import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY, // Use environment variable for API key
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID); // Use environment variable for base ID

export default base;
