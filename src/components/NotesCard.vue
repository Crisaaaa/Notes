<template>
  <v-card
      :title="note.title"
      :subtitle="note.content || 'No note yet :('"
      class=" mb-4 px-10 crisa-note-card "
      width="300"
      hover
      style="min-height: 75px"
      @click="onNoteClick">
    <v-btn
        class="ma-2"
        height="30"
        width="35"
        style="position: absolute; top: 0; right: 0"
        color="yellow"
        icon="mdi-delete-outline"
        @click.stop="onDelete"
      ></v-btn>
  </v-card>

</template>

<script>
export default {
  name: "NotesCard",
  props: {
    note: Object
  },
  data() {
    return {
      isEditing: false
    }
  },
  methods: {
    async onDelete() {
      await this.$store.dispatch('deleteNote', this.note.id)
      this.$emit('noteDelete')
    },
    onNoteClick() {
            console.log("noteCard")
      this.$emit('noteClick', this.note)
    }
  }
}
</script>

<style>
.crisa-note-card:hover {
  background-color: #f0ed90 !important;
}

.crisa-note-card {
  background-color: #f2f2e6 !important;
}

</style>