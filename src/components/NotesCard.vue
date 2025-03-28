<template>
    <v-card
    :title="note.title"
    :subtitle="note.content"
    class=" mb-4 px-10 crisa-note-card "
     width="300"
     hover
     > </v-card>
  <v-textarea :disabled="!isEditing"></v-textarea>
   <v-btn @click="toggleEditing()"> Edit</v-btn>
</template>

<script>
export default{
    name:"NotesCard",
    props:{
        note: Object
    },
  data(){
      return {
        isEditing:false
      }
  },
  methods:{
      toggleEditing(){
        this.isEditing = !this.isEditing
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