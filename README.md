# eslint-config-appnexus

## Installation

```shell
npm install eslint-config-appnexus --save-dev

# Additional plugins needed
npm install eslint-plugin-import --save-dev
npm install eslint-plugin-lodash --save-dev
npm install eslint-plugin-promise --save-dev
npm install eslint-plugin-prettier --save-dev
npm install --save-dev --save-exact prettier
```

Create a `.prettierrc` file in the project root with the standard overrides:

```
{
  "printWidth": 120,
  "singleQuote": true,
  "arrowParens": "always",
  "semi": true,
  "trailingComma": "all"
}
```

## Links

- [Semver Policy](https://github.com/appnexus/eslint-config-appnexus/wiki#semver-policy)
- [Change Log](CHANGELOG.md)

## Configure .eslintrc.json

### Base

[View Config](https://github.com/appnexus/eslint-config-appnexus/blob/master/base.js)

```json
{
	"extends": ["appnexus"]
}
```

### Base + UI Rules

[View Config](https://github.com/appnexus/eslint-config-appnexus/blob/master/frontend.js)

```json
{
	"extends": ["appnexus/frontend"]
}
```

Additional installs

```shell
npm install eslint-plugin-react --save-dev
```

### Base + Backend Rules

[View Config](https://github.com/appnexus/eslint-config-appnexus/blob/master/backend.js)

```json
{
	"extends": ["appnexus/backend"]
}
```

Additional installs

```shell
npm install eslint-plugin-hapi --save-dev
```

### Typescript Base

[View Config](https://github.com/appnexus/eslint-config-appnexus/blob/master/typescript.js)

```json
{
	"extends": ["appnexus/typescript"]
}
```

Additional installs

```shell
npm install @typescript-eslint/eslint-plugin@latest --save-dev
npm install eslint-plugin-import@latest --save-dev
```

package.json scripts:

```
	"lint": "eslint --ext .js,.jsx,.ts,.tsx src",
	"lint-fix": "eslint --ext .js,.jsx,.ts,.tsx src --fix",
```

## Overriding rules

To override rules for your project use the rules section of the .eslintrc.json file

#### Example overriding indentation to 2 spaces:

```json
{
	"extends": ["appnexus"],
	"rules": {
		"indent": ["error", 2]
	}
}
```

#### Example of adding mocha defined functions:

```json
{
	"env": {
		"mocha": true
	},
	"extends": ["appnexus"]
}
```

## Rule Changes

See the [wiki](https://github.com/appnexus/eslint-config-appnexus/wiki) for the semver policy for this project. Please propose rule changes as an [issue](https://github.com/appnexus/eslint-config-appnexus/issues) in this repo.

## Find Unused Rules

```shell
npm run find-unused-rules -- base.js
npm run find-unused-rules -- frontend.js
npm run find-unused-rules -- backend.js
```
