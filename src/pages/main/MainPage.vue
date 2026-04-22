<template>
  <div class="page">
    <div class="_container">
      <div class="main">
        <div class="filters">
          <button class="filters__btn" @click="isFilterOpen = true">
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
        <div
          v-if="isFilterOpen"
          class="filter-overlay"
          @click.self="isFilterOpen = false"
        >
          <div class="filter-popup">
            <div class="filter-header">
              <h2>Фильтры</h2>
              <button @click="isFilterOpen = false">✕</button>
            </div>

            <input
              v-model="tempQuery"
              class="filter-input"
              placeholder="Поиск..."
              @input="onSearch"
            />

            <div class="filter-section">
              <h3>Категории</h3>

              <button
                class="filter-chip"
                :class="{ active: tempCategory === 'all' }"
                @click="tempCategory = 'all'"
              >
                Все
              </button>

              <button
                v-for="cat in categories"
                :key="cat.slug"
                class="filter-chip"
                :class="{ active: tempCategory === cat.slug }"
                @click="tempCategory = cat.slug"
              >
                {{ cat.name }}
              </button>
            </div>

            <div class="filter-section">
              <h3>Цена</h3>

              <input v-model.number="tempMin" placeholder="Мин" />
              <input v-model.number="tempMax" placeholder="Макс" />
              <button class="apply-btn" @click="applyFilters">Найти</button>
            </div>
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
          v-for="product in allProducts"
          :key="product.id"
        >
          <router-link :to="`/product/${product.id}`">
            <img :src="product.thumbnail" />
            <h3>{{ product.title }}</h3>
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
import { onMounted, ref } from "vue";
import { authStore } from "@/store/auth";
import { getMe } from "@/api/auth";

const allProducts = ref([]);
const categories = ref([]);

const isFilterOpen = ref(false);

const query = ref("");
const selectedCategory = ref("all");

const tempQuery = ref("");
const tempCategory = ref("all");

const currentPage = ref(1);
const perPage = 12;
const total = ref(0);

const loadProducts = async () => {
  const skip = (currentPage.value - 1) * perPage;

  let url = "";

  if (query.value.trim()) {
    url = `https://dummyjson.com/products/search?q=${query.value}&limit=${perPage}&skip=${skip}`;
  } else if (selectedCategory.value !== "all") {
    url = `https://dummyjson.com/products/category/${selectedCategory.value}?limit=${perPage}&skip=${skip}`;
  } else {
    url = `https://dummyjson.com/products?limit=${perPage}&skip=${skip}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  allProducts.value = data.products;
  total.value = data.total;
};

const loadCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/category-list");
  const data = await res.json();

  categories.value = data.map((cat) => ({
    slug: cat,
    name: cat,
  }));
};

const nextPage = async () => {
  if (currentPage.value * perPage < total.value) {
    currentPage.value++;
    await loadProducts();
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await loadProducts();
  }
};

const applyFilters = async () => {
  query.value = tempQuery.value;
  selectedCategory.value = tempCategory.value;

  currentPage.value = 1;
  isFilterOpen.value = false;

  await loadProducts();
};

onMounted(async () => {
  await loadProducts();
  await loadCategories();

  if (authStore.accessToken) {
    try {
      const user = await getMe(authStore.accessToken);
      authStore.user = user;
    } catch (e) {
      authStore.logout();
    }
  }
});
</script>
