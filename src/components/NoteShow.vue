<template>
  <v-dialog
      :model-value="dialog"
      @update:modelValue="onDialogUpdate"
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
          <v-col cols="12">
              <v-text-field
                  label="Title"
                  required
                  class="w-50"
                  v-model="localNote.title"
                  @keydown.enter="onSave"
              ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
                v-model="localNote.content"
                required
                class="w-100"
                rows="5"
            />
          </v-col>

        </v-col>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            text="Save"
            color="green"
            @click="onSave"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";


export default {
  name: 'NoteShow',
  data() {
    return {
      localNote: null,
    }
  },
  watch: {
    note(val) {
      this.localNote = {...val}
    },
    dialog(val) {
      if (val == false) {
        this.$emit('noteChanged')
      }
    }
  },
  props: {
    dialog: Boolean,
    note: Object
  },
  methods: {
    onDialogUpdate(value) {
      this.$emit('update:dialog', value)
    },
    async onSave() {
      await axios.put(` http://localhost:3001/notes/${this.localNote.id}`, {
        title: this.localNote.title,
        content: this.localNote.content
      })
      this.$emit('update:dialog', false)
      this.$emit('noteChanged')
    },
    async onDelete() {
      await this.$store.dispatch('deleteNote', this.localNote.id)
      this.$emit('update:dialog', false)
      this.$emit('noteChanged')
      console.log("noteShow delete")
    }
  }
}

</script>