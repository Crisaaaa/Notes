import { createRouter, createWebHistory } from 'vue-router'
import NotesMain from '@/components/NotesMain.vue'
import NoteNew from '@/components/NoteNew.vue'
import NoteEdit from '@/components/NoteEdit.vue'

const routes = [
    { path: '/', name: 'Home', component: NotesMain },
    { path: '/new', name: 'NoteNew', component: NoteNew },
    { path: '/edit/:id', name: 'NoteEdit', component: NoteEdit, props: true },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router