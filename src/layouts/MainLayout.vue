<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
  <div>
    <Header />

    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
  </div>
</template>
