<template>
    <v-card
    :title="note.title"
    :subtitle="note.content || ''"
    class=" mb-4 px-10 crisa-note-card "
     width="300"
     hover
     style="min-height: 75px"
     > </v-card>
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