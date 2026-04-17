<template>
  <section class="page">
    <div class="_container">
      <div v-if="product">
        <h1>{{ product.title }}</h1>
        <img :src="product.thumbnail" />
        <p>{{ product.description }}</p>

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
          <button class="product__cart" @click="addToCart(product)">
            Добавить в корзину
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

      <p v-else>Загрузка...</p>
    </div>
    <button class="product_nav" @click="$router.back()">Назад</button>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useFavorites } from "@/store/favorites";
import { useCart } from "@/store/cart";

const { addToCart } = useCart();

const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

const route = useRoute();

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

const product = ref(null);

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`);
  product.value = await res.json();
});
</script>
