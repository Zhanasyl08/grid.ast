<template>
  <div class="_container">
    <div class="fav__title"><h2>Избранное</h2></div>

    <div v-if="favorites.length" class="fav">
      <div v-for="item in favorites" :key="item.id" class="fav_block">
        <div class="fav__image">
          <img src="@/assets/img/whiteshirt.jpeg" alt="" />{{ item.image }}
        </div>
        <div class="fav__text">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}₸</p>
          <h4>{{ item.subdesc }}</h4>
        </div>
        <button class="fav__delete" @click="removeFromFavorites(item.id)">
          Х Удалить
        </button>
      </div>
      <button class="product__cart fav__cart">Добавить в корзину</button>
    </div>

    <p v-else>Пусто</p>
  </div>
</template>

<script setup>
import { useFavorites } from "@/store/favorites";

const { favorites, removeFromFavorites } = useFavorites();
</script>
