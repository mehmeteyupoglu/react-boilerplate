import { Request, UtilityFunctions } from "../utils";

const prefix = "";

/**
 * Asynchronously fetch data from the mock backend
 * @param {string} query
 * @returns {array || undefined}
 */

export const getTodos = () => {
    const todoRequest = Request.get(`${prefix}`);

    UtilityFunctions.asyncToaster(todoRequest, {});

    return todoRequest;
};
