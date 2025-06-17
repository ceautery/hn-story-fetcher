import { defineDb, defineTable, column } from "astro:db";

const Story = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    time: column.number(),
    url: column.text(),
    title: column.text(),
  },
});

export default defineDb({
  tables: { Story },
});
