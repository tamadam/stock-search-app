import { z } from "zod";

export const stocksSchema = z.object({
    name: z.string().min(1, "Name is required"),
    symbol: z.string().min(1, "Symbol is required"),
});