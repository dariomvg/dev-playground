import { create } from "zustand";
import { persist } from "zustand/middleware";

// Estado general de ejemplo

export const useHandleCount = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

// Estado general de ejemplo 2

export const useHandleUser = create((set) => ({
  name: "Albert",
  age: 55,
  changeName: (newName) => set({ name: newName }),
  changeAge: (newAge) => set({ age: newAge }),
}));

// Estado con asincronía

export const useHandleList = create((set) => ({
  list: [],
  getList: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const res = await response.json();
    set({ list: res });
  },
}));

// Estado con persistencia de datos(localStorage) con el uso de un middleware

export const useHandleStore = create((set) =>
  persist(
    (set) => ({
      name: "Albert",
      age: 46,
      changeName: (newName) => set({ name: newName }),
    }),
    { name: "user-logged" }
  )
);
