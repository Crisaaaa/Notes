<template>
  <div>
    <NotesCard
        v-for="note in notes"
        :note="note"
        :key="note.id"
        @noteClick="onNoteClick"
        @noteChanged="onNoteChanged"
    >
    </NotesCard>
    <NoteShow v-model:dialog="dialog" :note="noteOnScreen" @noteChanged="onNoteChanged"></NoteShow>


  </div>

</template>

<script>

import NotesCard from './NotesCard.vue';
import NoteShow from "./NoteShow.vue";

export default {
  name: "NotesList",
  components: {
    NotesCard,NoteShow
  },
  data() {
    return {
      dialog: false,
      noteOnScreen: null,
    }
  },
  props: {
    notes: Array
  },
  methods: {
    onNoteClick(note) {
      this.dialog = true
      this.noteOnScreen = note
    },
    onNoteChanged(){
      this.$emit('noteChanged')
    }
  }

}

</script>
