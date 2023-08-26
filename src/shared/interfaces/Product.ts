export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export type ProductCategoryTypes =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";
