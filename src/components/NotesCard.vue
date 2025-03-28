<template>
    <div>
        {{note.title}}
    </div>
</template>

<script>
export default{
    name:"NotesCard",
    props:{
        note: Object
    }
}
</script>