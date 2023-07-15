import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | undefined | any;
  slug: string;
  price: number;
  category: string;
  description: string;
  size: string[];
  colour: string[];
  qty: number;
  discount?: number | any;
};
export type Cart = {
  id: number;
  title: string;
  image?: string[] | StaticImageData | undefined | any;
  slug: string;
  price: number;
  discount?: number | any;
  category: string;
  size: string;
  qty: number;
  colour:string;
  uuid: number| string |undefined;
};
