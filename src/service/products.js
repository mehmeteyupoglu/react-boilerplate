import { Request, UtilityFunctions } from "../utils";

const prefix = "products?title_like=";

/**
 * Asynchronously fetch data from the mock backend
 * @param {string} query
 * @returns {array || undefined}
 */

export const getProductList = (query) => {
  // capitalize each word to have a correct filtering in the mock backend
  query = UtilityFunctions.capitalizeInput(query);

  return Request.get(`${prefix}${query}`);
};
