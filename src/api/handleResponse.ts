import { Response } from 'node-fetch'
/**
 *
 * @param {HTTPResponse} response
 */
export const handleResponse = (response: Response) => {
    if (!response.ok) {
        console.error(response);
    }
    return response
        .text()
        .then((text) => JSON.parse(text.replace(/<[^>]*>/gi, '')))

        .then((result) => {
            if (result.d) {
                return JSON.parse(result.d);
            }
            return result;
        });
};

export default handleResponse;
