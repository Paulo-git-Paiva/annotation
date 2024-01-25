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

      <v-card-text class="center-content">
        <v-row class="mb-1">
          <v-col class="text-center" cols="12">
            <v-icon class="mdi-48px">mdi-attachment</v-icon>
          </v-col>
          <v-col cols="12" class="py-0">
            <span
              class="headline text-h5 d-flex justify-center font-weight-bold blue--text"
              style="color: #2b94d5"
            >
              Anotações
            </span>
          </v-col>
          <v-col cols="12" class="py-0">
            <span class="caption d-flex justify-center"> by Speedio </span>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-4"
          ><v-col align-self="center" cols="6">
            <v-btn
              block
              color="primary"
              rounded="pill"
              prepend-icon="mdi-plus"
              class="text-capitalize"
              @click="creation"
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

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const creation = () => {
  router.push("/CreateAnnotation");
};
</script>
<style scoped>
.center-content {
  margin-top: 50%;
}
</style>
