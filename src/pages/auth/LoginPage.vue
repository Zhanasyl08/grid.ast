<template>
  <section class="sign">
    <div class="sign_in">
      <div class="sign_in_log">
        <input v-model="username" placeholder="логин" />
        <input v-model="password" type="password" placeholder="пароль" />
      </div>
      <div class="sign_in__btn">
        <button @click="handleLogin">Войти</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { login } from "@/api/auth";
import { authStore } from "@/store/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  const data = await login(username.value, password.value);

  authStore.setAuth(data);

  router.push("/"); // редирект на главную
};
</script>
