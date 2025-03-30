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
      const res = await axios.get(`http://localhost:3001/notes`)
      const notes = res.data

      // Step 1: Extract all numeric IDs
      const numericIds = notes
          .map(n => parseInt(n.id, 10))
          .filter(id => !isNaN(id))

      // Step 2: Find the max ID and add 1
      const maxId = numericIds.length > 0 ? Math.max(...numericIds) : 0
      const newId = maxId + 1

      // Step 3: Use newId in title if needed
      if (this.note.title === "") {
        this.note.title = `Note_${newId}`
      }

      await axios.post(` http://localhost:3001/notes`, {
        title: this.note.title,
        content: this.note.content,
        nb: newId
      })
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>