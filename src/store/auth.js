import { reactive } from "vue";

export const authStore = reactive({
  user: null,
  accessToken: localStorage.getItem("token") || null,

  setAuth(data) {
    this.accessToken = data.token;
    this.user = data;

    localStorage.setItem("token", data.token);
  },

  logout() {
    this.accessToken = null;
    this.user = null;

    localStorage.removeItem("token");
  },
});
