import { ref } from "vue";

const favorites = ref([]);

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

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
};
