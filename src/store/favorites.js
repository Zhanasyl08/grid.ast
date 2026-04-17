import { ref, watch } from "vue";

const saved = localStorage.getItem("favorites");

const favorites = ref(saved ? JSON.parse(saved) : []);

export const useFavorites = () => {
  const addToFavorites = (product) => {
    const exists = favorites.value.find((p) => p.id === product.id);
    if (!exists) {
      favorites.value.push(product);
    }
  };

  const removeFromFavorites = (id) => {
    favorites.value = favorites.value.filter((p) => p.id !== id);
  };

  const isFavorite = (id) => {
    return favorites.value.some((p) => p.id === id);
  };

  // 💾 САМО СОХРАНЕНИЕ
  watch(
    favorites,
    (newVal) => {
      localStorage.setItem("favorites", JSON.stringify(newVal));
    },
    { deep: true },
  );

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
};
