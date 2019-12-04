
/**
 * Creates options for pos
 * @param {Object} body
 */
export function createOptions(body) {
    return {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    };
}

export default createOptions;