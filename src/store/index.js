import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {},
    mutations: {},
    actions: {
        async deleteNote({comit}, id) {
            console.log(comit)
            await axios.delete(` http://localhost:3001/notes/${id}`)
        },
    },
    methods: {},
    getters: {}
})