export const cookieState = atom({
  key: "cookieState",
  default: [],
});

export const getCookieSelector = selector({
  key: "cookie/get",
  get: async ({ get }) => {
    try {
      const { data } = await client.get("/cookies");
      return data.data;
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    set(cookieState, newValue);
  },
});
