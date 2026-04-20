export const login = async (username, password) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
    credentials: "include",
  });

  if (!res.ok) throw new Error("login error");

  return await res.json();
};

export const getMe = async (token) => {
  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!res.ok) throw new Error("not authorized");

  return await res.json();
};
