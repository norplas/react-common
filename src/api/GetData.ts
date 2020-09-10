import fetch, { RequestInit } from 'node-fetch';
import { defaultOptions } from './defaultOptions';
import { handleResponse } from './handleResponse';
import { createOptions } from './createOptions';

/**
 * Fetch Data from URL
 * @param {string} path
 * @param {Object} opts
 */
const GetData = (path: string, opts: RequestInit | any = defaultOptions): Promise<string> => {
    if (!Object.keys(opts).includes('body')) {
        opts = createOptions(opts);
    }


    return fetch(`${path}`, opts)
        .then(handleResponse)
        .catch((error) => {
            console.error(error);
            return error.toString();
        });
};

export default GetData;
