<template>
  <div class="pa-4 text-center">
    <v-dialog
        v-model="dialog"
        max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Note1"
            variant="tonal"
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
          prepend-icon="mdi-account"
          title="Note"
      >
        <v-card-text>
          <v-col dense>
            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  label="Title"
                  required
                  :style="{ minWidth: '250px', width: 'auto'}"
                  :disabled="!isEditing"
              ></v-text-field>
            </v-col>

            <v-col
                cols="12"
                md="4"
                sm="6"
            >
              <v-text-field
                  label="Content"
                  required
                  :style="{minHeight: '150px', minWidth: '500px'}"
                  :disabled="!isEditing"
              ></v-text-field>
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
          ></v-btn>

          <v-btn
              v-if="isEditing"
              text="Save"
              color="red-accent-4"
              @click="onSave"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      isEditing: false
    }
  },
  methods: {
    onSave() {
      this.isEditing = false;
      // this.dialog = false
    }
  }
}
</script>

<style>




</style>