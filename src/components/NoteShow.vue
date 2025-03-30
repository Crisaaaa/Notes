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
                  v-model="localNote.title"
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
                  v-model="localNote.content"
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
</template>
<script>
import axios from "axios";

export default {
  name: 'NoteShow',
  data() {
    return {
      localNote: null,
      isEditing: false,
    }
  },
  watch: {
    note(val) {
      this.localNote = {...val}
    },
  },
  props: {
    dialog: Boolean,
    note: Object
  },
  methods: {
    onFieldClick() {
      if (!this.isEditing) {
        this.isEditing = true;
      }
    },
    onDialogUpdate(value) {
      this.$emit('update:dialog', value)
    },
    async onSave() {
      this.isEditing = false;
      await axios.put(` http://localhost:3001/notes/${this.localNote.id}`, {
        title: this.localNote.title,
        content: this.localNote.content
      })
      this.$emit('update:dialog', false)
      this.$emit('noteChanged')
    },
    async onDelete() {
      await axios.delete(` http://localhost:3001/notes/${this.localNote.id}`)
      this.$emit('update:dialog', false)
      this.$emit('noteChanged')
    }
  }
}

</script>