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

### Standard

```json
"extends": [
	"appnexus"
]
```

### Standard + UI Rules

```json
"extends": [
	"appnexus/frontend"
]
```

```shell
npm install eslint-plugin-react --save-dev
```

### Standard + Backend Rules

```json
"extends": [
	"appnexus/backend"
]
```

```shell
npm install eslint-plugin-hapi --save-dev
```
