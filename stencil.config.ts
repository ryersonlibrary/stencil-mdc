import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'STENCIL_NS',
  plugins: [
    sass({
      injectGlobalPaths: ['./node_modules', './src/global']
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'docs',
      strict: true,
    },
    {
      type: 'stats',
      file: 'stats.json',
    },
    {
      type: 'www',
    }
  ],
  copy: [{ src: '**.*.scss' }],
  preamble: '(C) - MIT License',
  enableCache: true,
};
