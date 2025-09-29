export type Category = {
  sl: number;
  categoryName: string;
  subCategoryCount: string;
};

export const categoryData: Category[] = [
  { sl: 1, categoryName: "Plumbing", subCategoryCount: "5" },
  { sl: 2, categoryName: "Electrical", subCategoryCount: "8" },
  { sl: 3, categoryName: "Cleaning", subCategoryCount: "12" },
  { sl: 4, categoryName: "Painting", subCategoryCount: "4" },
  { sl: 5, categoryName: "Carpentry", subCategoryCount: "6" },
  { sl: 6, categoryName: "Gardening", subCategoryCount: "3" },
  { sl: 7, categoryName: "Appliance Repair", subCategoryCount: "7" },
  { sl: 8, categoryName: "Moving & Shifting", subCategoryCount: "2" },
  { sl: 9, categoryName: "Pest Control", subCategoryCount: "5" },
  { sl: 10, categoryName: "Security Services", subCategoryCount: "4" },
];
