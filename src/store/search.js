import { ref } from "vue";

export const useSearch = () => {
  const query = ref("");
  const results = ref([]);

  const searchProducts = async () => {
    if (!query.value.trim()) {
      results.value = [];
      return;
    }

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${query.value}`,
    );

    const data = await res.json();
    results.value = data.products;
  };

  return { query, results, searchProducts };
};
