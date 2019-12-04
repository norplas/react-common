import fetch from 'node-fetch';
import createOptions from './createOptions';
import defaultOptions from './defaultOptions';


const PRODUCTION_URL = 'http://norweb.magna.global/api/reporting/DigitalOptions.asmx/';
const DEBUG_URL =
    // 'http://localhost:59183/reporting/DigitalOptionsTest.asmx/';
    'http://norweb.magna.global/api/reporting/DigitalOptions.asmx/';

// const DEBUG_URL2 = 'http://localhost:59183/reporting/PaintItemsTest.asmx/';


export const getIsTesting = (arg) => !/production/gi.test(arg);
export const base_url = () => {
    const dev = process.env.NODE_ENV;

    return /production/gi.test(dev) ? PRODUCTION_URL : DEBUG_URL;
};

// const base_url = '/AssemblyOffload.asmx/';


/**
 * Fetch Data from URL
 * @param {string} path
 * @param {Object} opts
 */
const GetData = (path, opts = defaultOptions) => {
    if (!Object.keys(opts).includes('body')) opts = createOptions(opts);


    return fetch(`${path}`, opts)
        .then(handleResponse)
        .catch((error) => {
            console.error(error);
        });
};

export default GetData;
