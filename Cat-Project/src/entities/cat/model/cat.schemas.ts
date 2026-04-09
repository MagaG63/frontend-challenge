import z from "zod";

export const CatSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export const CatsSchema = z.array(CatSchema);
