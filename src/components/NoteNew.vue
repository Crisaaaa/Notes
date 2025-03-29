<template>
  <v-sheet
      class="d-flex align-center justify-center mx-auto"
      height="100vh"
      width="300"
  >
    <v-form fast-fail @submit.prevent="onSubmit">
      <v-text-field
          v-model="title"
          label="Title"
          :style="{ minWidth: '250px', width: 'auto' }"
      ></v-text-field>

      <v-text-field
          v-model="content"
          label="Content"
          :style="{minHeight: '150px', minWidth: '500px'}"

      ></v-text-field>

      <v-btn color="#ebe89e" class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import axios from "axios";

export default {
  name: 'NoteNew',
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods: {
    async onSubmit() {
      await axios.post(` http://localhost:3001/notes`, {
        title: this.title,
        content: this.content
      })
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>