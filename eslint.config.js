import js from "@eslint/js"; //检验 js 规范
import globals from "globals";
import tseslint from "typescript-eslint"; //推荐 ts 规范
import pluginVue from "eslint-plugin-vue"; //推荐 vue 规范
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
		plugins: { js },
		extends: ["js/recommended"]
	},{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
		languageOptions: { globals: {...globals.browser, ...globals.node} }
	},
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},
	{
		ignores: ['*.d.ts']
	}
]);
