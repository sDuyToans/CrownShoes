import { createSelector } from "reselect";

const selectShoesReducer = (state) => state.shoesReducer;
export const selectShoesCategory = createSelector(
  [selectShoesReducer],
  (shoesReducerSlice) => shoesReducerSlice.shoesCategories
);
export const selectShoesCategoriesMap = createSelector(
  [selectShoesCategory],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
export const selectIsLoading = createSelector(
  [selectShoesReducer],
  (shoesReducerSlice) => shoesReducerSlice.isLoading
);
