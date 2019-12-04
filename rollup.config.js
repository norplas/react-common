import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output: {
        // file: './dist/bundle.js',
        file: './dist/bundle.min.js',
        // format: 'cjs',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};