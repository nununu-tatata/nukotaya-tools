import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages の公開URL: https://nununu-tatata.github.io/nukotaya-tools/
  site: 'https://nununu-tatata.github.io',
  // リポジトリ名。public/ の画像などは import.meta.env.BASE_URL を前に付けて参照する
  base: '/nukotaya-tools/',
});
