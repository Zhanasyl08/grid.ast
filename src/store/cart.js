import { ref, watch } from "vue";

const CART_KEY = "cart";

const cart = ref(JSON.parse(localStorage.getItem(CART_KEY)) || []);

const saveCart = () => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart.value));
};

export const useCart = () => {
  const addToCart = (product) => {
    const existing = cart.value.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.value.push({
        ...product,
        quantity: 1,
      });
    }

    saveCart();
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((item) => item.id !== id);
    saveCart();
  };

  const increase = (id) => {
    const item = cart.value.find((p) => p.id === id);
    if (item) item.quantity++;
    saveCart();
  };

  const decrease = (id) => {
    const item = cart.value.find((p) => p.id === id);
    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      cart.value = cart.value.filter((p) => p.id !== id);
    }

    saveCart();
  };

  const totalPrice = () => {
    return cart.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increase,
    decrease,
    totalPrice,
  };
};
