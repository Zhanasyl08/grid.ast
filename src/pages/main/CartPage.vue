<script setup>
import { useCart } from "@/store/cart";

const { cart, removeFromCart, increase, decrease, totalPrice } = useCart();
</script>

<template>
  <div class="_container">
    <h2>Корзина</h2>

    <div v-if="cart.length">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.thumbnail" width="80" />

        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }} ₸</p>

          <div>
            <button @click="decrease(item.id)">-</button>
            {{ item.quantity }}
            <button @click="increase(item.id)">+</button>
          </div>

          <button @click="removeFromCart(item.id)">Удалить</button>
        </div>
      </div>

      <h3>Итого: {{ totalPrice() }} ₸</h3>
    </div>

    <p v-else>Корзина пустая</p>
  </div>
</template>
