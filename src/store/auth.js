import { reactive } from "vue";

export const authStore = reactive({
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,

  setAuth(data) {
    this.user = data;
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  },

  logout() {
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
});
