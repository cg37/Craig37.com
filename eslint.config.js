import js from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...eslintPluginVue.configs['flat/recommended'],
	{
		files: ['*.vue', '**/*.vue'],
		rules: {
			"vue/max-attributes-per-line": ["error", 
				{
    "singleline": {
      "max": 3
    },      
    "multiline": {
      "max": 1
    }
  }],
		"no-undef": "off"
		},
		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser',
			}
		}
	}
)