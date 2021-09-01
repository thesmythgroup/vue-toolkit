# Form

```html
<v-form @submit="onSubmit">
  <v-field label="Name">
    <v-input name="name"></v-input>
  </v-field>

  <v-field label="Description">
    <v-textarea name="description"></v-textarea>
  </v-field>

  <v-field label="Active">
    <v-checkbox name="isActive"></v-checkbox>
  </v-field>

  <v-button type="submit">Submit</v-button>
</v-form>
```
