import axios from "axios";
import { selector } from "recoil";
import { pageState } from "@store/atoms/pageState.store";
import { searchState } from "@store/atoms/searchState.store";

const PER_PAGE = 30;

const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const imageSelector = selector({
  key: "imageSelector",
  get: async ({ get }) => {
    try {
      const searchValue = get(searchState);
      const pageValue = get(pageState);
      const response = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error;
    }
  },
});
