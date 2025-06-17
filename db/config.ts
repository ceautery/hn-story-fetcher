import { defineDb, defineTable, column } from "astro:db";

const Story = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    url: column.text(),
    title: column.text(),
    date: column.text(),
    domain: column.text(),
  },
});

export default defineDb({
  tables: { Story },
});
