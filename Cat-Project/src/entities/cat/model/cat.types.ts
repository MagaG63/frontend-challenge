import type z from "zod";
import type { CatSchema } from "./cat.schemas";

export type Cat = z.infer<typeof CatSchema>;

export type CatState = {
  cat: Cat[] | null;
  favoritesCat: Cat[] | null;
  loading: boolean;
  error: string | null;
};
