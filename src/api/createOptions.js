/**
 * Creates options for pos
 * @param {Object} body
 */
export const createOptions = (body) => ({
    method: 'post',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
    },
});
export default createOptions;
