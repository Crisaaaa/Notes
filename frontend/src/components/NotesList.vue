<template>
  <div>
    <NotesCard
        v-for="note in notes"
        :note="note"
        :key="note.id"
        @click="onNoteClick(note)">
    </NotesCard>


    <v-dialog
        v-model="dialog"
        max-width="600"
    >
      <v-card>

        <template #title>
          <div class="d-flex align-center justify-space-between">
            <span>Note</span>
            <v-btn
                text="Delete"
                color="red-accent-4"
                @click="onDelete">
            </v-btn>
          </div>
        </template>

        <v-card-text>
          <v-col dense>
            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <div @click="onFieldClick">
                <v-text-field
                    label="Title"
                    required
                    :style="{ minWidth: '250px', width: 'auto'}"
                    :disabled="!isEditing"
                    v-model="noteOnScreen.title"
                ></v-text-field>
              </div>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <div @click="onFieldClick">
                <v-text-field
                    required
                    :style="{minHeight: '150px', minWidth: '500px'}"
                    :disabled="!isEditing"
                    v-model="noteOnScreen.content"
                    @click="onFieldClick"
                ></v-text-field>
              </div>
            </v-col>

          </v-col>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Edit"
              color="primary"
              @click="isEditing = true"
              v-if="!isEditing"
          ></v-btn>

          <v-btn
              v-if="isEditing"
              text="Save"
              color="green"
              @click="onSave"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>

import NotesCard from './NotesCard.vue';
import axios from "axios";


export default {
  name: "NotesList",
  components: {
    NotesCard
  },
  data() {
    return {
      dialog: false,
      isEditing: false,
      noteOnScreen: null,
    }
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.isEditing = false
      }
    }
  },
  props: {
    notes: Array
  },
  methods: {
    onFieldClick() {
      console.log("hdfvsjfhgvsdfhvsdjfhvsd")
      if (!this.isEditing) {
        this.isEditing = true;
      }
    },
    onNoteClick(note) {
      this.dialog = true
      this.noteOnScreen = {...note}
    },
    async onSave() {
      this.isEditing = false;
      await axios.put(` /notes/${this.noteOnScreen.id}`, {
        title: this.noteOnScreen.title,
        content: this.noteOnScreen.content
      })
      this.dialog = false;
      this.$emit('noteChanged')
    },
    async onDelete() {
      await axios.delete(`/notes/${this.noteOnScreen.id}`)
      this.dialog = false;
      this.$emit('noteChanged')
    }
  }

}

</script>
