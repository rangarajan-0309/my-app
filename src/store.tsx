import create from "zustand";

const useLoginStore = create((set) => ({
  username: "",
  password: "",
  isLoggedIn: false,
  login: async (username, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        set({ isLoggedIn: true });
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  logout: () => {
    set({ isLoggedIn: false });
  },
}));

export default useLoginStore;
