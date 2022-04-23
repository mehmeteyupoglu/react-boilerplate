import { toast } from 'react-toastify';

/**
 * @function
 * @param {string} query
 * @returns {string} capitalized query
 */

export const capitalizeInput = (query) => {
    const queryArray = query.split(" ");

    const capitalizedArr = queryArray.map(
        (query) => query.charAt(0).toUpperCase() + query.slice(1)
    );
    return capitalizedArr.join(" ");
};

/**
 * @function
 * @param {array} products
 * @returns {array | null} with certain properties
 */

export const mapProducts = (products) => {
    if (!products) {
        return null;
    }

    return products.map((product) => {
        const { title, tags, body_html, id, image, product_type } = product;
        return {
            title,
            tags,
            body_html,
            id,
            image: image.src,
            type: product_type,
        };
    });
};

/**
 * @function
 * @param {array} products
 * @returns {array | null} with certain properties
 */

export const asyncToaster = (promise, {
    loading = 'Loading',
    success = 'Got the data',
    error = 'Error when fetching'
}) => {
    toast.promise(promise, {
        loading,
        success,
        error,
    })
};
