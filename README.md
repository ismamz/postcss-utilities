# PostCSS Utility Library [![Build Status][ci-img]][ci]

<p align="center">
    <a href="https://ismamz.github.io/postcss-utilities">
        <img src="https://github.com/ismamz/postcss-utilities/blob/master/media/logo.png" alt="PostCSS Utility Library">
    </a>
</p>

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-utilities.svg
[ci]:      https://travis-ci.org/ismamz/postcss-utilities

Let's face it. You don't have time to write your own mixins, helpers or shortcuts for your next project. Let [postcss-utilities](http://github.io/ismamz/postcss-utilities) help you instead.

postcss-utilities is a [PostCSS] plugin that includes the most commonly used mixins, shortcuts and helpers. It's as easy as specifying `@util utility-name` in your stylesheet, and postcss-utilities will handle the rest for you.

<h4 align="center"><a href="https://ismamz.github.io/postcss-utilities">Check out the documentation to get started using postcss-utilities</a></h4>

<h5 align="center"><a href="https://ismamz.github.io/postcss-utilities/playground/">Try it in the browser!</a></h5>

### Motivation

PostCSS has a lot of plugins and some of them use non-standar CSS properties to work as mixins or helpers. This is not a best way for a PostCSS plugin, because developers will not understand what is the source of this property.

> "This plugin saves us from many tiny plugins with unknown properties" _‒[@ai](https://github.com/ai) proposal [postcss/issues/645](https://github.com/postcss/postcss/issues/645)_

### What is the difference between preprocessor’s mixins libraries?

- You don’t need the extra files in your css codebase for mixins.
- You don’t need mixins for vendor prefixing (use [autoprefixer plugin](https://github.com/postcss/autoprefixer))
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

.box-16-9 {
    background-color: #ccc;
    margin-bottom: 20px;
    @util aspect-ratio(16:9);
}

```

### Output
```css

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

```

## Usage

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

```js
postcss([ require('postcss-utilities') ])
```

See [PostCSS] docs for examples of your environment.

## Contributing

The list of utilities is open for suggestions.
- Do you think that we should include a new utility? [Create an issue with you proposal](https://github.com/ismamz/postcss-utilities/issues/new).
- Found an issue? [Report it!](https://github.com/ismamz/postcss-utilities/issues/new).
- Would you like to contribute with code or documentation? [Send a pull request](https://github.com/ismamz/postcss-utilities/pull/new/master)

## Contributors

- [Marcus Tisäter](https://github.com/marcustisater)

