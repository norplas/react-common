import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

import pkg from './package.json';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'node-fetch': 'fetch',
};
const config = {
    input: 'src/index.js',
    output: [

        {
            file: pkg.browser,
            format: 'umd',
            name: 'Example',
            globals,
        },
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Example',
            globals,
        },
        {
            file: pkg.module,
            format: 'es',
            globals,
        },
    ],
    external: [
        'react',
        'react-dom',
    ],
    plugins: [
        peerDepsExternal(),
        postcss({ extract: true, plugins: [autoprefixer] }),
        babel({ exclude: 'node_modules/**' }),
        localResolve(),
        resolve(),
        commonjs(),
        filesize(),
    ],
};

export default config;
