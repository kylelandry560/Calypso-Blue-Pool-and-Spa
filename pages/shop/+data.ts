import fetch from "cross-fetch";
//import type { Movie, MovieDetails } from "../types.js";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: number;
}

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = (await response.json()) as Product[];
  
  return products;  
};
