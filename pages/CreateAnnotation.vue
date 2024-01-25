<template>
  <v-card
    width="400"
    height="600"
    class="mx-auto mt-auto mb-auto"
    color="grey-lighten-3"
  >
    <v-card-title>
      <v-row class="mt-1 mb-2">
        <v-col cols="10">
          <p class="text-h6 px-3">Anotações</p>
        </v-col>
        <v-col cols="2">
          <v-icon icon="mdi-close"></v-icon>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <form>
        <v-row>
          <v-col cols="12" class="py-0 px-6">
            <v-textarea
              label="Exp: Ao ligar falar com Luiza"
              auto-grow
              variant="solo"
              rows="5"
              row-height="25"
              shaped
              dense
              solo
              flat
            ></v-textarea>
          </v-col>
          <v-col cols="12" class="py-1 px-6"
            ><span>potencial do negócio</span></v-col
          >
          <v-col cols="12" class="py-0 px-6">
            <v-text-field
              label="$00.00"
              persistent-hint
              variant="solo"
              rounded="pill"
              prefix="$"
              clearable
              dense
              solo
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-1 px-6"><span>Categorização</span></v-col>
          <v-col cols="12" class="py-0 px-6">
            <v-autocomplete
              v-model="selected"
              :items="items"
              chips
              clearable
              hide-details
              hide-no-data
              hide-selected
              multiple
              single-line
              variant="solo"
              rounded="pill"
              dense
              solo
              flat
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" class="py-1 px-6"><span>Lembrete</span></v-col>
          <v-col cols="12" class="py-0 px-6">
            <v-text-field
              label="Selecione uma data"
              persistent-hint
              variant="solo"
              rounded="pill"
              readonly
              dense
              solo
              flat
              @click="menu1 = true"
              v-model="formattedDataInicial"
            ></v-text-field>
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <v-date-picker
                locale="pt-BR"
                v-model="dataInicial"
                @input="onDateInput"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
    <v-card-text>
      <v-row justify="center">
        <v-col align-self="center" cols="10">
          <v-btn
            block
            color="primary"
            rounded="pill"
            prepend-icon="mdi-plus"
            class="text-capitalize"
          >
            <template v-slot:prepend>
              <v-icon></v-icon>
            </template>
            Criar anotação
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      menu1: false,
      items: ["Importante", "Relevante", "Baixa Relevancia"],
      selected: ["Importante"],
      subject: "Plans for the weekend",
      dataInicial: new Date(),
    };
  },
  computed: {
    formattedDataInicial: {
      get() {
        return this.formatDate(this.dataInicial);
      },
      set() {},
    },
  },
  methods: {
    onDateInput(newDate: Date | null): void {
      if (newDate) {
        this.dataInicial = newDate;
      }
    },
    formatDate(date: Date): string {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
});
</script>

<style scoped></style>
