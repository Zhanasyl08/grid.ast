<template>
  <section class="sign">
    <div class="sign_in">
      <div class="sign_in__title"><h2>Авторизация</h2></div>

      <input v-model="username" placeholder="логин" class="sign_in__items" />
      <input
        v-model="password"
        type="password"
        placeholder="пароль"
        class="sign_in__items"
      />

      <button class="sign_in__items" @click="handleLogin">Войти</button>
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

<style lang="scss" scoped>
section {
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sign_in {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
  height: 40px;
  padding: 10px 80px;
  margin-top: 40px;
}
button {
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  padding: 20px 60px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-family: "montserrat";
  font-weight: 400;
  margin-top: 60px;
  &:hover {
    color: black;
    background-color: white;
  }
}
h2 {
  display: flex;
  justify-content: center;
  padding-top: 120px;
  font-size: 30px;
  font-weight: 600;
  color: white;
  font-family: "montserrat";
}
.sign_in__items {
  display: block;
  width: 100%; /* или конкретная ширина */
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.sign_in {
  text-align: center;
}
.sign_in__items {
  display: inline-block;
}
</style>
