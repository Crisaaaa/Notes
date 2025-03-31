<template>
  <div>
    <NotesCard
        v-for="note in notes"
        :note="note"
        :key="note.id"
        @noteClick="onNoteClick"
        @noteDelete="noteDelete"
    >
    </NotesCard>


  </div>

</template>

<script>

import NotesCard from './NotesCard.vue';

export default {
  name: "NotesList",
  components: {
    NotesCard
  },
  props: {
    notes: Array
  },
  methods: {
    onNoteClick(note) {
      this.$emit('noteClicked',note)
    },
    noteDelete(){
       this.$emit('noteChanged')
    }
  }

}

</script>
