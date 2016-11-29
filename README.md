# eslint-config-appnexus

## Installation

```shell
npm install eslint-config-appnexus --save-dev

# Additional plugins needed
npm install eslint-plugin-import --save-dev
npm install eslint-plugin-lodash --save-dev
npm install eslint-plugin-promise --save-dev
```

### Configure .eslintrc

### Base

```json
"extends": [
	"appnexus"
]
```

### Base + UI Rules

```json
"extends": [
	"appnexus/frontend"
]
```

```shell
npm install eslint-plugin-react --save-dev
```

### Base + Backend Rules

```json
"extends": [
	"appnexus/backend"
]
```

```shell
npm install eslint-plugin-hapi --save-dev
```

## Overriding rules

To override rules for your project use the rules section of the .eslintrc file

#### Example overriding indentation to 2 spaces:
```json
"extends": [
	"appnexus"
],
"rules": {
	"indent": ["error", 2]
}
```

#### Example of adding mocha defined functions:
```json
"env": {
  "mocha": true
},
"extends": [
  "appnexus"
]
```

## Rule Changes

See the [wiki](https://github.com/appnexus/eslint-config-appnexus/wiki) for the semver policy for this project. Please propose rule changes as an [issue](https://github.com/appnexus/eslint-config-appnexus/issues) in this repo.
