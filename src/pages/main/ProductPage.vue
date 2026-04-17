<template>
  <section class="page">
    <div class="_container">
      <div class="product">
        <img src="@/assets/img/whiteshirt.jpeg" alt="" />
        <div class="product__desc">
          <h1 class="product__name">{{ product.name }}</h1>
          <h2 class="product__price">{{ product.price }}₸</h2>
          <p class="product__description">{{ product.description }}</p>
          <p class="product__subdescription">
            Материал:<br />{{ product.subdesc }}
          </p>
          <div style="margin-top: 20px">
            <p>Размер:</p>
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :style="{
                marginRight: '10px',
                marginTop: '10px',
                background: selectedSize === size ? 'black' : 'white',
                color: selectedSize === size ? 'white' : 'black',
              }"
            >
              {{ size }}
            </button>
          </div>

          <div style="margin-top: 20px">
            <p>Количество:</p>
            <button class="product__count" @click="decrease">-</button>
            <span style="margin: 0 10px">{{ quantity }}</span>
            <button class="product__count" @click="increase">+</button>
          </div>

          <div style="margin-top: 20px">
            <button class="product__cart">
              Добавить в корзину ({{ quantity }} шт, {{ selectedSize }})
            </button>
          </div>
          <div style="margin-top: 20px" class="product__fav">
            <button
              @click="
                isFavorite(product.id)
                  ? removeFromFavorites(product.id)
                  : addToFavorites(product)
              "
            >
              {{
                isFavorite(product.id)
                  ? "💔 Убрать из избранного"
                  : "❤️ В избранное"
              }}
            </button>
          </div>
        </div>
      </div>
      <button class="product_nav" @click="$router.back()">Назад</button>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useFavorites } from "@/store/favorites";

const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

const route = useRoute();
const product = ref({});

const sizes = ["S", "M", "L"];
const selectedSize = ref("S");

const quantity = ref(1);

const increase = () => {
  quantity.value++;
};

const decrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const allProducts = [
  {
    id: 1,
    name: "Футболка",
    price: 7777,
    description: "Крутая футболка",
    subdesc:
      "Футболки изготавливают преимущественно из легкого трикотажного полотна. Самый популярный материал — хлопок (100% или с добавлением эластана/полиэстера для прочности и эластичности). Также используются синтетика (полиэстер для спорта), вискоза, лен и смесовые ткани. Популярные виды трикотажа — кулирная гладь, интерлок, пике",
  },
  {
    id: 2,
    name: "Футболка",
    price: 7777,
    description: "Белая базовая",
    subdesc:
      "Футболки изготавливают преимущественно из легкого трикотажного полотна. Самый популярный материал — хлопок (100% или с добавлением эластана/полиэстера для прочности и эластичности). Также используются синтетика (полиэстер для спорта), вискоза, лен и смесовые ткани. Популярные виды трикотажа — кулирная гладь, интерлок, пике",
  },
  {
    id: 3,
    name: "Футболка",
    price: 7777,
    description: "Для зала",
    subdesc:
      "Футболки изготавливают преимущественно из легкого трикотажного полотна. Самый популярный материал — хлопок (100% или с добавлением эластана/полиэстера для прочности и эластичности). Также используются синтетика (полиэстер для спорта), вискоза, лен и смесовые ткани. Популярные виды трикотажа — кулирная гладь, интерлок, пике",
  },
];

onMounted(() => {
  const id = Number(route.params.id);
  product.value = allProducts.find((p) => p.id === id);
});
</script>
