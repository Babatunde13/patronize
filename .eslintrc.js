module.exports = {
	'env': {
		'es2021': true,
		'node': true,
		'mocha': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'eol-last': 'error',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
