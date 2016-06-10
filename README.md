# PostCSS Utility Library [![Build Status][ci-img]][ci]

<p align="center">
    <a href="https://ismamz.github.io/postcss-utilities">
        <img src="https://github.com/ismamz/postcss-utilities/blob/master/media/logo.png" alt="PostCSS Utility Library">
    </a>
</p>

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-utilities.svg
[ci]:      https://travis-ci.org/ismamz/postcss-utilities

[postcss-utilities](http://github.io/ismamz/postcss-utilities) is a [PostCSS] plugin that have the most used mixins, shortcuts and helpers to use as `@util` rules in yours stylesheets.

<h3 align="center"><a href="https://ismamz.github.io/postcss-utilities">See Documentation</a></h3>

### List of Utilities

- [aspect-ratio](https://ismamz.github.io/postcss-utilities/docs#aspect-ratio)
- [center](https://ismamz.github.io/postcss-utilities/docs#center)
- [center-block](https://ismamz.github.io/postcss-utilities/docs#center-block)
- [circle](https://ismamz.github.io/postcss-utilities/docs#circle)
- [clearfix](https://ismamz.github.io/postcss-utilities/docs#clear-fix)
- [hd breakpoint](https://ismamz.github.io/postcss-utilities/docs#hd-breakpoint)
- [hide-visually](https://ismamz.github.io/postcss-utilities/docs#hide-visually)
- [hr](https://ismamz.github.io/postcss-utilities/docs#horizontal-rule)
- [no-hover](https://ismamz.github.io/postcss-utilities/docs#no-hover)
- [no-js](https://ismamz.github.io/postcss-utilities/docs#no-js)
- [reset-list](https://ismamz.github.io/postcss-utilities/docs#reset-list)
- [text-hide](https://ismamz.github.io/postcss-utilities/docs#text-hide)
- [triangle](https://ismamz.github.io/postcss-utilities/docs#triangle)
- [truncate](https://ismamz.github.io/postcss-utilities/docs#truncate)

### What is the difference with preprocessor’s mixins libraries?

- You don’t need extra files for mixins.
- You don’t need mixins for vendor prefixes (use [autoprefixer plugin](https://github.com/postcss/autoprefixer) for that)
- You can use with LESS, SASS, pure CSS or whatever you want.

## Examples

### Input
```css
.truncate {
    @util truncate;
    width: 500px;
}

.cfx {
    @util clearfix;
}

.box-16-9 {
    background-color: #ccc;
    margin-bottom: 20px;
    @util aspect-ratio(16:9);
}

.circle {
    @util circle(200px, red);
}
```

### Output
```css
.truncate {
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cfx:after {
    content: '';
    display: block;
    clear: both;
}

.box-16-9 {
    background-color: #ccc;
    margin-bottom: 20px;
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
}

.circle {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: red;
}
```

## Usage

```js
postcss([ require('postcss-utilities') ])
```

See [PostCSS] docs for examples for your environment.

## Contributing

The list of utilities is open to new mixins, shortcuts and helpers.
- Do you think that we should include one? [Create an issue with you proposal](https://github.com/ismamz/postcss-utilities/issues/new).
- Do you have a problem? [Write an issue](https://github.com/ismamz/postcss-utilities/issues/new).
- Do you want to contribute with code? [Send a pull request](https://github.com/ismamz/postcss-utilities/pull/new/master)
- Do you find an error in the documentation? [Fix it in `gh-pages` branch and send a pull request](https://github.com/ismamz/postcss-utilities/tree/gh-pages)
