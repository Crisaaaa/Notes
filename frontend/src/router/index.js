import { createRouter, createWebHistory } from 'vue-router'
import NotesMain from '../components/NotesMain.vue'
import NoteNew from '../components/NoteNew.vue'


const routes = [
    { path: '/', name: 'Home', component: NotesMain },
    { path: '/new', name: 'NoteNew', component: NoteNew },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router