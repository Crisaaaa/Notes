<template>
  <div>
    <NotesList @noteChanged="fetchNotes" @noteClicked="onNoteClick" class="d-flex flex-column align-center mt-8 pb-10"
               :notes="notes"></NotesList>
    <v-btn @click="onAdd" color="#ebe89e"
           style="position: fixed; bottom: 40px; right: 40px; z-index: 1000;">Add
    </v-btn>
    <NoteShow v-model:dialog="dialog" :note="noteOnScreen" @noteChanged="fetchNotes"></NoteShow>
  </div>
</template>

<script>
import NotesList from './NotesList.vue'
import axios from 'axios';
import NoteShow from "@/components/NoteShow.vue";

export default {
  name: 'NotesMain',
  components: {
    NoteShow,
    NotesList
  },
  mounted() {
    this.fetchNotes()
  },
  data() {
    return {
      notes: [],
      dialog: false,
      noteOnScreen: null
    }
  },
  methods: {
    async fetchNotes() {
      const response = await axios.get(' http://localhost:3001/notes');
      this.notes = response.data
    },
    onNoteClick(note) {
      console.log("hello")
      this.dialog = true
      this.noteOnScreen = note
    },
    onAdd() {
      this.$router.push("/new")
    }
  }
}
</script>