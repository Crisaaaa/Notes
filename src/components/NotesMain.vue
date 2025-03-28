<template>
  <div>
    <div><NotesList class="d-flex flex-column align-center mt-8 pb-10" :notes ="notes"></NotesList></div>
    <v-btn  color="#ebe89e"
    style="position: fixed; bottom: 40px; right: 40px; z-index: 1000;">Add</v-btn>
  </div>
  </template>
  
  <script>
  import NotesList from './NotesList.vue'
  import axios from 'axios';
  export default {
  name: 'NotesMain',
  components: {
    NotesList
  },
  mounted(){
    this.fetchNotes()
  },
  data(){
    return{
        notes: []
    }
  },
  methods:{
    async fetchNotes(){
        const response = await axios.get(' http://localhost:3001/notes');
        this.notes=response.data
    }
  }
}
</script>