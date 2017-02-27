---
layout: home
---

<div class="description">
  <strong>postcss-utilities</strong> is a <a href="http://postcss.org/">PostCSS</a> plugin that have the most used mixins, shortcuts and helpers to use as <code>@util</code> rules in yours stylesheets.
</div>

<div class="text-center">
  <a class="github-button" href="https://github.com/ismamz/postcss-utilities" data-icon="octicon-star" data-style="mega" data-count-href="/ismamz/postcss-utilities/stargazers" data-count-api="/repos/ismamz/postcss-utilities#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star ismamz/postcss-utilities on GitHub">Star</a>
</div>

<hr class="short">

## Playground

<iframe class="playground" src="{{ site.baseurl }}/playground/index.html" frameborder="0"></iframe>

## Getting started

#### 1. Install PostCSS and the plugin via npm:

```
npm install postcss postcss-utilities
```

#### 2. Choose your runner

You can use a PostCSS runner or use directly PostCSS API. Choose your favorite runner:

<div class="row">
  <div class="col-3">
    <ul>
      <li><a href="https://www.npmjs.com/package/postcss-cli">CLI</a></li>
      <li><a href="https://www.npmjs.com/package/postcss-loader">webpack</a></li>
      <li><a href="https://www.npmjs.com/package/gulp-postcss">gulp</a></li>
      <li><a href="https://www.npmjs.com/package/grunt-postcss">grunt</a></li>
      <li><a href="https://www.npmjs.com/package/browserify-postcss">browserify</a></li>
      <li><a href="https://www.npmjs.com/package/postcss-brunch">brunch</a></li>
    </ul>
  </div>
  <div class="col-3">
    <ul>
      <li><a href="https://www.npmjs.com/package/broccoli-postcss">broccoli</a></li>
      <li><a href="https://www.npmjs.com/package/fly-postcss">fly</a></li>
      <li><a href="https://www.npmjs.com/package/postcss-middleware">connect/express</a></li>
      <li><a href="https://www.npmjs.com/package/duo-postcss">duo</a></li>
      <li><a href="https://prepros.io/">Prepros</a></li>
    </ul>
  </div>
</div>

#### 3. Read the docs and start to use `@util`

##### Examples:

<div class="row">
  <div class="col-6 col-sm-12">
{% highlight css %}
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
{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
{% highlight css %}
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
{% endhighlight %}
  </div>
</div>


<hr class="short">

<a class="btn" href="{{ site.baseurl }}/docs">Read the docs</a>
