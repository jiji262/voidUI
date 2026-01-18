import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  sourcemap: true,
  minify: true,
  treeshake: true,
  splitting: false,
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});