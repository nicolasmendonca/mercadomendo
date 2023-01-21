import { PHONE_NUMBER } from '$env/static/private';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const productSchema = z.array(z.object({
  "id": z.number(),
  "title": z.string(),
  "description": z.string(),
  "price": z.number(),
  "discountPercentage": z.number(),
  "rating": z.number(),
  "stock": z.number(),
  "brand": z.string(),
  "category": z.string(),
  "thumbnail": z.string(),
  "images": z.array(z.string())

}))

export const load = (({ fetch }) => {
  return {
    products: fetch('https://dummyjson.com/products').then(res => res.json()).then(data => productSchema.parse(data.products)),
    phoneNumber: Number(PHONE_NUMBER),
  };
}) satisfies PageServerLoad;
