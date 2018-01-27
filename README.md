# PostCSS Utility Library [![Build Status][ci-img]][ci]

<p align="center">
    <a href="https://ismamz.github.io/postcss-utilities">
        <img
            src="https://raw.githubusercontent.com/ismamz/postcss-utilities/master/media/logo.png"
            alt="PostCSS Utility Library"
            width="200"
        />
    </a>
</p>

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-utilities.svg
[ci]:      https://travis-ci.org/ismamz/postcss-utilities

[postcss-utilities](https://ismamz.github.io/postcss-utilities/) is a [PostCSS] plugin that includes the most commonly used mixins, shortcuts and helpers. It's as easy as specifying `@util utility-name` in your stylesheet, and postcss-utilities will handle the rest for you.

<h4 align="center"><a href="https://ismamz.github.io/postcss-utilities">Check out the documentation to get started using postcss-utilities</a></h4>

<h5 align="center"><a href="https://ismamz.github.io/postcss-utilities/playground/">Try it in the browser!</a></h5>

### Motivation

PostCSS has a lot of plugins and some of them use non-standard CSS properties to work as mixins or helpers. This is not a best way for a PostCSS plugin, because developers will not understand what is the source of this property.

> "This plugin saves us from many tiny plugins with unknown properties" _‒[@ai](https://github.com/ai) proposal [postcss/issues/645](https://github.com/postcss/postcss/issues/645)_

### What is the difference between preprocessor’s mixins libraries?

There are lot of Sass Mixins Libraries ([over 65!](http://www.cssauthor.com/sass-mixins-library/)), but postcss-utilities makes the difference. All mixins and helpers are built with JavaScript and you can add to your workflow with ease, as simple as adding [autoprefixer](https://github.com/postcss/autoprefixer) or many others useful [PostCSS plugins](https://github.com/postcss/postcss/blob/master/docs/plugins.md).

You can forget about copy mixins from project to project and focus on write your project specific mixins and use this plugin for the most generic helpers.

- You don’t need the extra files in your CSS codebase for mixins.
- You don’t need mixins for vendor prefixing (use [autoprefixer](https://github.com/postcss/autoprefixer) plugin)
- You can use postcss-utilities with LESS, SASS, vanilla CSS or whatever you choice.

### List of current utilities

**IMPORTANT**: The list of utilities is open for suggestions.

- [aspect-ratio](https://ismamz.github.io/postcss-utilities/docs#aspect-ratio)
- [border-color](https://ismamz.github.io/postcss-utilities/docs#border-color)
- [border-radius](https://ismamz.github.io/postcss-utilities/docs#border-radius)
- [border-style](https://ismamz.github.io/postcss-utilities/docs#border-style)
- [border-width](https://ismamz.github.io/postcss-utilities/docs#border-width)
- [center](https://ismamz.github.io/postcss-utilities/docs#center)
- [center-block](https://ismamz.github.io/postcss-utilities/docs#center-block)
- [circle](https://ismamz.github.io/postcss-utilities/docs#circle)
- [clearfix](https://ismamz.github.io/postcss-utilities/docs#clear-fix)
- [hd breakpoint](https://ismamz.github.io/postcss-utilities/docs#hd-breakpoint)
- [hide-visually](https://ismamz.github.io/postcss-utilities/docs#hide-visually)
- [hr](https://ismamz.github.io/postcss-utilities/docs#horizontal-rule)
- [margin](https://ismamz.github.io/postcss-utilities/docs#margin)
- [no-hover](https://ismamz.github.io/postcss-utilities/docs#no-hover)
- [no-js](https://ismamz.github.io/postcss-utilities/docs#no-js)
- [padding](https://ismamz.github.io/postcss-utilities/docs#padding)
- [position](https://ismamz.github.io/postcss-utilities/docs#position)
- [reset-list](https://ismamz.github.io/postcss-utilities/docs#reset-list)
- [reset-text](https://ismamz.github.io/postcss-utilities/docs#reset-text)
- [size](https://ismamz.github.io/postcss-utilities/docs#size)
- [sticky-footer](https://ismamz.github.io/postcss-utilities/docs#sticky-footer)
- [text-hide](https://ismamz.github.io/postcss-utilities/docs#text-hide)
- [text-stroke](https://ismamz.github.io/postcss-utilities/docs#text-stroke)
- [triangle](https://ismamz.github.io/postcss-utilities/docs#triangle)
- [truncate](https://ismamz.github.io/postcss-utilities/docs#truncate)
- [word-break](https://ismamz.github.io/postcss-utilities/docs#word-break)


## Examples

### Input
```css

.cfx {
    @util clearfix;
}

.rounded-top {
    @util border-top-radius(4px);
}

@util no-hover {
    .box {
        background-color: #666;
    }
}

```

### Output
```css

.cfx:after {
    content: '';
    display: block;
    clear: both;
}

.rounded-top {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.no-hover .box {
    background-color: #666;
}

```

## Usage

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

### Quick usage

Using [PostCSS CLI](https://github.com/postcss/postcss-cli) you can do the following:

Install `postcss-cli` and the plugin on your project directory:

```
npm install postcss-cli postcss-utilities --save-dev
```

Add a `postcss` script to your `package.json`:

```json
"scripts": {
    "postcss": "postcss input.css -u postcss-utilities -o output.css"
}
```

After this, you can run `npm run postcss` and transform your `input.css` into `output.css`.


### Use with [styled-jsx](https://github.com/zeit/styled-jsx)

**styled-jsx** allows you to use full, scoped and component-friendly CSS in your JSX (rendered on the server or the client) and you can add `@util` rules with `postcss-utilities`.

```
npm install --save styled-jsx styled-jsx-plugin-postcss postcss-utilities
```

Add `postcss` config in your `package.json`:

```json
"postcss": {
    "plugins": {
        "postcss-utilities": {}
    }
}
```

Add `styled-jsx/babel` to plugins in your babel configuration:

```json
{
  "plugins": [
    "styled-jsx/babel"
  ]
}
```

Then write `@util` rules in your code:

```jsx
export default () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    <style jsx>{`
      p {
        color: red;
        @util center;
      }
    `}</style>
  </div>
)
```

### For tasks runners and others enviroments

```js
postcss([ require('postcss-utilities')({ /* options*/ }) ])
```

See [PostCSS] docs for examples of your environment.


## Options

##### noHoverSelector

Type: `string`<br>
Default: `.no-hover`

To use with [`no-hover` utility](https://ismamz.github.io/postcss-utilities/docs#no-hover)

##### noJsSelector

Type: `string`<br>
Default: `.no-js`

To use with [`no-js` utility](https://ismamz.github.io/postcss-utilities/docs#no-js)

##### ie8

Type: `boolean`<br>
Default: `false`

Set `true` to use `clearfix` method IE8 compatible

##### centerMethod

Type: `string`<br>
Default: `transform`
Values: `['transform'|'flexbox']`

To use with [`center` utility](https://ismamz.github.io/postcss-utilities/docs#center)

##### textHideMethod

Type: `string`<br>
Default: `indent`
Values: `['indent'|'font']`

To use with [`text-hide` utility](https://ismamz.github.io/postcss-utilities/docs#text-hide)


## Contributing

The list of utilities is open for suggestions.

- Do you think that we should include a new utility? [Create an issue with you proposal](https://github.com/ismamz/postcss-utilities/issues/new).
- Found an issue? [Report it!](https://github.com/ismamz/postcss-utilities/issues/new).
- Would you like to contribute with code or documentation? [Send a pull request](https://github.com/ismamz/postcss-utilities/pull/new/master)


## Contributors

- [Marcus Tisäter](https://github.com/marcustisater)

