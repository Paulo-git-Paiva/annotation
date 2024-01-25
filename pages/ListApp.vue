<template>
  <template>
    <v-card
      width="400"
      height="600"
      class="mx-auto mt-auto mb-auto"
      color="grey-lighten-3"
    >
      <v-card-title>
        <v-row class="mt-2 mb-2"
          ><v-col cols="10"><p class="text-h6">Anotações</p></v-col
          ><v-col cols="2"> <v-icon icon="mdi-close"></v-icon></v-col
        ></v-row>
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col v-for="n in 4" :key="n" cols="12">
            <v-card class="rounded-lg">
              <v-row align="center" class="mt-1 mb-1">
                <v-col class="text-end" cols="2">
                  <v-icon>mdi-attachment</v-icon>
                </v-col>
                <v-col cols="8">
                  <div>
                    <div class="headline">Exp: Ao ligar falar com Lui...</div>
                    <div class="caption">11/10/2023 - 13:37h</div>
                  </div>
                </v-col>
                <v-col cols="2">
                  <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row justify="center" class="mt-4"
          ><v-col align-self="center" cols="10">
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
          </v-col></v-row
        >
      </v-card-text>
    </v-card>
  </template>
</template>

<script setup></script>

<style lang="scss" scoped></style>
