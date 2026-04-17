<template>
  <div class="page">
    <div class="_container">
      <div class="main">
        <div class="filters">
          <button class="filters__btn">
            <span class="hide"></span>&nbsp;Filters
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="black"
            >
              <path
                d="M3 8L21 8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 17H21"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 5L17 11"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 14L8 20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div id="popup" class="popup">
          <div class="popup-content">
            <span id="closeBtn">&times;</span>
            <p>Это всплывающее окно!</p>
          </div>
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
        rel="stylesheet"
      />

      <div class="hero-section">
        <div class="card-grid">
          <router-link class="card">
            <div class="card__background card__background_imgfirst"></div>

            <div class="card__content">
              <p class="card__category">Интерьер</p>
              <h3 class="card__heading">Минималистичный дизайн</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgsecond"></div>

            <div class="card__content">
              <p class="card__category">Распродажи</p>
              <h3 class="card__heading">До 50% скидки акции</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgthird"></div>

            <div class="card__content">
              <p class="card__category">Материалы</p>
              <h3 class="card__heading">Хлопок Полиэстер Кулирка</h3>
            </div>
          </router-link>
          <router-link class="card">
            <div class="card__background card__background_imgfour"></div>

            <div class="card__content">
              <p class="card__category">Ассортимент</p>
              <h3 class="card__heading">Нефор Вип Абу</h3>
            </div>
          </router-link>
          <div></div>
        </div>
      </div>
    </div>
  </div>

  <div class="catalog">
    <div class="_container">
      <div class="catalog_blocks">
        <div
          class="catalog_block"
          v-for="product in paginatedProducts"
          :key="product.id"
        >
          <router-link :to="`/product/${product.id}`">
            <img src="@/assets/img/whiteshirt.jpeg" alt="" />
            <h3>{{ product.name }}</h3>
            <h4>{{ product.price }}₸</h4>
          </router-link>
        </div>
      </div>

      <div style="margin-top: 20px; text-align: center" class="pagination">
        <button @click="prevPage">← Назад</button>
        <span style="margin: 0 10px">Страница {{ currentPage }}</span>
        <button @click="nextPage">Вперёд →</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { getMe } from "@/api/auth";
import { authStore } from "@/store/auth";

const allProducts = ref([
  {
    id: 1,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 2,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 3,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 4,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 5,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 6,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 7,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 8,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 9,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 10,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 11,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 12,
    name: "Футболка",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 13,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 14,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 15,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 16,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 17,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 18,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 19,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 20,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 21,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 22,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 23,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 24,
    name: "Кроссовки",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  {
    id: 25,
    name: "Штаны ",
    price: 7777,
    image: "@/assets/img/whiteshirt.jpeg",
  },
  { id: 26, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 27, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 28, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 29, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 30, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 31, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },

  { id: 32, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 34, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 35, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 36, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 37, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 38, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 39, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 40, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 41, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 42, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 43, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 44, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 45, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 46, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 47, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
  { id: 48, name: "Штаны", price: 7777, image: "@/assets/img/whiteshirt.jpeg" },
]);

const currentPage = ref(1);
const perPage = 12;

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return allProducts.value.slice(start, start + perPage);
});

const nextPage = () => {
  if (currentPage.value * perPage < allProducts.value.length) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(async () => {
  if (authStore.accessToken) {
    const user = await getMe(authStore.accessToken);
    authStore.user = user;
  }
});

onMounted(async () => {
  if (authStore.accessToken) {
    const user = await getMe(authStore.accessToken);
    authStore.user = user;
  }
});
</script>
