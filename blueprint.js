const blueprint = {
  "name": "Trade-In Leads",  // Updated to reflect the new context
  "slug": "tradeinleads",  // Updated to match the table name
  "fields": [
    {
      "key": "Lead Source",  // Match the database column name
      "label": "Lead Source",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    },
    {
      "key": "Dealer",  // Match the database column name
      "label": "Dealer",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    },
    {
      "key": "Customer",  // Match the database column name
      "label": "Customer",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    },
    {
      "key": "Lead Status Type",  // Match the database column name
      "label": "Lead Status Type",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    },
    {
      "key": "Lead Status",  // Match the database column name
      "label": "Lead Status",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    },
    {
      "key": "Lead Origination Date",  // Match the database column name, corrected the typo
      "label": "Lead Origination Date",
      "type": "string"  // Changed to string to match 'text' type in PostgreSQL
    },
    {
      "key": "email",  // Kept as is, matches the database column name
      "label": "Email",
      "type": "string"  // Kept as string to match 'text' type in PostgreSQL
    }
  ]
}
