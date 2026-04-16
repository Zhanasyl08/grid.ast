const BASE_URL = "https://dummyjson.com/auth";

export async function login(username, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
    credentials: "include",
  });

  return res.json();
}

export async function getMe(token) {
  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  return res.json();
}

export async function refreshToken(refreshToken) {
  const res = await fetch(`${BASE_URL}/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refreshToken,
      expiresInMins: 30,
    }),
    credentials: "include",
  });

  return res.json();
}
