import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categories) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES,
    categories
  );
};
