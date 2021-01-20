

import {RequestInit} from 'node-fetch';
 
export const defaultOptions:RequestInit = {
    // These properties are part of the Fetch Standard
    method: 'GET',
    /**
     * request headers. format is the identical to that accepted by the Headers
     * constructor (see below)
     */
    headers: {},
    /**
     * request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
     */
    
    /**
     *  set to `manual` to extract redirect headers, `error` to reject redirect
     */
    redirect: 'follow',

    /**
     * pass an instance of AbortSignal to optionally abort requests
     */
    signal: null,

    /**
     * The following properties are node-fetch extensions
     */

    /**
      * @description maximum redirect count. 0 to not follow redirect
      */
    follow: 20,
    /**
     * @description req/res timeout in ms, it resets on redirect.
     * 0 to disable (OS limit applies). Signal is recommended instead.
     */
    timeout: 0,
    compress: true, // support gzip/deflate content encoding. false to disable
    size: 0 // maximum response body size in bytes. 0 to disable

};

export default defaultOptions;
