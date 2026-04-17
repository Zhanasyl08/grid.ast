export const login = async (username, password) => {
  // логины если че
  const users = [
    { username: "a", password: "a" },
    { username: "admin", password: "1234" },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    throw new Error("Неверный логин или пароль");
  }

  return {
    token: "my-token",
    user: {
      username: user.username,
    },
  };
};

export const getMe = async (token) => {
  return {
    username: "a",
  };
};
