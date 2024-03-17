export const parseProjectCategory = (category: string) => {
  const parsedCategory = category.replace("_", " ");
  return parsedCategory;
};
