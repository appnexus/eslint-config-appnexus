module.exports = {
	"env": {
		"browser": true,
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},
	"extends": "appnexus/base",
	"plugins": [
		"react"
	],
	"rules": {
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/prop-types": 1,
		"react/react-in-jsx-scope": 2
	}
};
