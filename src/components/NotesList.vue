<template>
    <div>
        <NotesCard 
        v-for="note in notes"
        :note="note"
        :key="note.id">
        </NotesCard>
    </div>
</template>

<script>

import NotesCard from './NotesCard.vue';

export default{
    name:"NotesList",
    components:{
        NotesCard
    },
    props:{
        notes: Array
    }
}

</script>
