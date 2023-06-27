import fg from 'fast-glob';
import includePaths from 'rollup-plugin-includepaths';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

const input = 'bookmarklet/src/';
const output = "bookmarklet/dist/";

const files = fg.sync(input + '**/*.ts', { ignore: ['**/_*.ts'] });

const includePathOptions = {
  paths: ['bookmarklet/src/'],
  extensions: ['.ts'],
};

const plugins = [
  includePaths(includePathOptions),
  resolve({
    moduleDirectory: ['node_modules'],
  }),
  commonjs(),
  typescript(),
  isProduction && terser(),
];

const createRollupConfig = (files) => {
  return files.map((file) => {
    const fileName = file.replace(input, '').replace('.ts', '');

    return {
      input: file,
      output: {
        file: output + fileName + '.js',
        format: 'iife',
      },
      plugins,
    };
  });
};

export default createRollupConfig(files);
