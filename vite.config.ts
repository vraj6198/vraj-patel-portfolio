import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const base = process.env.GITHUB_ACTIONS === 'true' ? '/vraj-patel-portfolio/' : '/';

export default defineConfig({base,css:{postcss:{plugins:[tailwindcss()]}},server:{host:'127.0.0.1',watch:{useFsEvents:false,usePolling:true}},plugins:[vinext()]});
