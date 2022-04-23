import { Request } from "../utils";

const prefix = "";

/**
 * Asynchronously fetch data from the mock backend
 * @param {string} query
 * @returns {array || undefined}
 */

export const getTodos = () => {

    return Request.get(`${prefix}`);
};
