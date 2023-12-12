import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db?.products,
    product: (parent: any, args: { productID: string }, context: any) => {
      return db?.products.find((product) => product.id === args.productID);
    },
    categories: () => db?.categories,
    category: (parent: any, args: { categoryID: string }, context: any) => {
      return db?.categories.find((category) => category.id === args.categoryID);
    },
  },
  Product: {
    category: ({ categoryId }: any, args: any, context: any) => {
      return db?.categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }: any, args: any, context: any) => {
      return db?.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }: any, args: any, context: any) => {
      return db?.products.filter((product) => product.categoryId === id);
    },
  },
};
