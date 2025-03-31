<template>
  <v-text-field @keydown="onSearch" label="Search note.." class="mt-8 w-25 ml-9"></v-text-field>
  <div class="d-flex flex-column align-center">
    <NotesList @noteChanged="fetchNotes" @noteClicked="onNoteClick" class="mt-2 pb-10"
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
    async onSearch(event) {
      // const response = await axios.get(` http://localhost:3001/notes?title_like=${event.target.value}`);
      // this.notes = response.data
      fetch('http://localhost:3001/notes')
          .then(res => res.json())
          .then(data => {
            const searchTerm = event.target.value;
            const filtered = data.filter(note =>
                note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                note.content.toLowerCase().includes(searchTerm.toLowerCase())
            );
            this.notes = filtered
          });
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

