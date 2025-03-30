<template>
  <v-sheet
      class="d-flex flex-column  align-center justify-center mx-auto"
      height="100vh"
      width="300"
  >
    <div class="text-h5 " style="margin-bottom:20px ">CREATE A NOTE</div>
    <v-form fast-fail @submit.prevent="onSubmit">
      <v-text-field
          v-model="note.title"
          label="Title"
          :style="{ minWidth: '250px', width: 'auto' }"
      ></v-text-field>

      <v-textarea
          v-model="note.content"
          label="Content"
          :style="{minHeight: '150px', minWidth: '500px'}"

      ></v-textarea>

      <v-btn color="#ebe89e" class="mt-2" type="submit" block>Create</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import axios from "axios";


export default {
  name: 'NoteNew',
  data() {
    return {
      note: {
        title: "",
        content: ""
      }
    }
  },
  methods: {
    async onSubmit() {
      const res = await axios.get(`/notes`)
      const notes = res.data
      const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
      const nextId = maxId + 1
      if (this.note.title === "") {
        this.note.title = `Note_${nextId}`
      }
      await axios.post(`/notes`, {
        title: this.note.title,
        content: this.note.content
      })
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>