import axios from "axios";
import type { Cat } from "../model/cat.types";
import { CatsSchema } from "../model/cat.schemas";
const STORAGE_KEY = "favoriteCats";
class CatService {
  static async fetchCat(): Promise<Cat[]> {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    return CatsSchema.parse(data);
  }

  static fetchFavoriteCat(): Cat[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return CatsSchema.parse(JSON.parse(stored));
    }
    return [];
  }

  static addFavoriteCat(cat: Cat): Cat[] {
    const favoriteCats = this.fetchFavoriteCat();
    if (!favoriteCats.some((c) => c.id === cat.id)) {
      const updated = [...favoriteCats, cat];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }
    return favoriteCats;
  }

  static removeFavoriteCat(cat: Cat): Cat[] {
    const favoriteCats = this.fetchFavoriteCat();
    const updated = favoriteCats.filter((c) => c.id !== cat.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
}

export default CatService;
