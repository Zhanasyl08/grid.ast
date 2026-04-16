import { reactive } from "vue";

export const authStore = reactive({
  user: null,
  accessToken: null,
  refreshToken: null,

  setAuth(data) {
    this.user = data;
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;

    localStorage.setItem("token", this.accessToken);
  },

  logout() {
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;

    localStorage.removeItem("token");
  },
});
