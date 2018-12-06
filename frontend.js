module.exports = {
	extends: './base.js',
	env: {
		browser: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 2,
		'react/react-in-jsx-scope': 2,
		'react/prop-types': 2,
		'jsx-quotes': [2, 'prefer-single'],

		//  Warnings - will become errors in next major version

		// === Unspecified ===
		// 'react/display-name'
		// 'react/forbid-component-props '
		// 'react/forbid-prop-types'
		// 'react/jsx-boolean-value'
		// 'react/jsx-closing-bracket-location'
		// 'react/jsx-curly-spacing'
		// 'react/jsx-equals-spacing'
		// 'react/jsx-filename-extension'
		// 'react/jsx-first-prop-new-line'
		// 'react/jsx-handler-names'
		// 'react/jsx-indent'
		// 'react/jsx-indent-props'
		// 'react/jsx-key'
		// 'react/jsx-max-props-per-line'
		// 'react/jsx-no-bind'
		// 'react/jsx-no-comment-textnodes '
		// 'react/jsx-no-duplicate-props'
		// 'react/jsx-no-literals'
		// 'react/jsx-no-target-blank'
		// 'react/jsx-no-undef'
		// 'react/jsx-pascal-case'
		// 'react/jsx-sort-props'
		// 'react/jsx-space-before-closing'
		// 'react/jsx-tag-spacing'
		// 'react/jsx-wrap-multilines'
		// 'react/no-children-prop'
		// 'react/no-comment-textnodes'
		// 'react/no-danger'
		// 'react/no-danger-with-children'
		// 'react/no-deprecated'
		// 'react/no-did-mount-set-state'
		// 'react/no-did-update-set-state'
		// 'react/no-direct-mutation-state'
		// 'react/no-find-dom-node'
		// 'react/no-is-mounted'
		// 'react/no-multi-comp'
		// 'react/no-render-return-value'
		// 'react/no-set-state'
		// 'react/no-string-refs'
		// 'react/no-unescaped-entities'
		// 'react/no-unknown-property'
		// 'react/no-unused-prop-types'
		// 'react/prefer-es6-class'
		// 'react/prefer-stateless-function'
		// 'react/require-extension'
		// 'react/require-optimization'
		// 'react/require-render-return'
		// 'react/self-closing-comp'
		// 'react/sort-comp'
		// 'react/sort-prop-types'
		// 'react/style-prop-object'
		// 'react/wrap-multilines'
	},
	'settings': {
		'import/resolver': {'node': {'extensions': ['.js', '.jsx']}},
	},
};
