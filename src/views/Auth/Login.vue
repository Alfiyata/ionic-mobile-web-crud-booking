<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-xl font-semibold">Welcome to My App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :scroll-y="false">
      <div class="flex h-full w-full items-center justify-center">
        <div
          class="center-content bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <form class="space-y-6" @submit.prevent="handleLogin">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Sign in account
            </h3>
            <div>
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="state.form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >Your password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="state.form.password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
        </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  setup() {
    const state = reactive({
      form: {
        email: '',
        password: ''
      }
    });

    const handleLogin = () => {
      // Add login logic here
      console.log("Login attempt:", state.form.email, state.form.password);
    };

    return {
      handleLogin,
      state
    };
  },
});
</script>

<style scoped>
.center-content {
  padding: 2.5rem;
}
</style>
