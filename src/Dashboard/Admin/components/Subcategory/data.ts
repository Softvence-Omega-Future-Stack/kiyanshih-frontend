export type SubCategory = {
  sl: number;
  Subcategory: string;
  category: string;
};

export const subCategories: SubCategory[] = [
  { sl: 1, Subcategory: "Mobile Phones", category: "Electronics" },
  { sl: 2, Subcategory: "Laptops", category: "Electronics" },
  { sl: 3, Subcategory: "Cameras", category: "Electronics" },
  { sl: 4, Subcategory: "Men's Wear", category: "Fashion" },
  { sl: 5, Subcategory: "Women's Wear", category: "Fashion" },
  { sl: 6, Subcategory: "Refrigerators", category: "Home Appliances" },
  { sl: 7, Subcategory: "Washing Machines", category: "Home Appliances" },
  { sl: 8, Subcategory: "Microwaves", category: "Home Appliances" },
  { sl: 9, Subcategory: "Fiction", category: "Books" },
  { sl: 10, Subcategory: "Non-Fiction", category: "Books" },
];
