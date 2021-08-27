# Table

```html
<v-table :data="items">
  <v-column label="ID" v-slot="{ row }"> {{ row.id }} </v-column>
  <v-column label="Name" v-slot="{ row }"> {{ row.name }} </v-column>
</v-table>
```
