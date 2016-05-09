---
layout: default
title: Documentation
---

## Aspect Ratio

<div class="util">
  {% highlight css %}@util aspect-ratio([ratio]);{% endhighlight %}
</div>

#### Parameters

- `[ratio]` _(Optional)_ Format: `[int]:[int]` Default value: `16:9`

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/aspect-ratio.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/aspect-ratio.expect.css %}{% endhighlight %}
  </div>
</div>


## Center

<div class="util">
  {% highlight css %}@util center;{% endhighlight %}
</div>

Block-level element of an unknown height and width, centered vertically within my parent.

<div class="parent">
  .parent
  <div class="child">
    .child
  </div>
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/center.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/center.expect.css %}{% endhighlight %}
  </div>
</div>


## Center Block

<div class="util">
  {% highlight css %}@util center-block;{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/center-block.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/center-block.expect.css %}{% endhighlight %}
  </div>
</div>


## Circle

<div class="util">
  {% highlight css %}@util circle([radio], [color]);{% endhighlight %}
</div>

Create a simple circle figure.

<div class="circle">.circle</div>

#### Parameters

- `[radio]` _(Optional)_ Default value: `100px`
- `[color]` _(Optional)_ Default value: `#000`

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/circle.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/circle.expect.css %}{% endhighlight %}
  </div>
</div>


## Clear Fix

<div class="util">
  {% highlight css %}@util clearfix;{% endhighlight %}
</div>

The clearfix hack is a popular way to contain floats without resorting to using presentational markup.

Read more:

- [The very latest clearfix reloaded (Thierry Koblentz)](http://cssmojo.com/the-very-latest-clearfix-reloaded/)
- [A new micro clearfix hack (Nicolas Gallagher)](http://nicolasgallagher.com/micro-clearfix-hack/)

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/clearfix.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/clearfix.expect.css %}{% endhighlight %}
  </div>
</div>


## HD Breakpoint

<div class="util">
  {% highlight css %}@util hd [pixel-ratio] {
    [nested-rules]
  }{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hd.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hd.expect.css %}{% endhighlight %}
  </div>
</div>


## Hide Visually

<div class="util">{% highlight css %}@util hide-visually;{% endhighlight %}</div>

Only display content to screen readers. Read more: [How to hide content (a11yproject.com)](http://a11yproject.com/posts/how-to-hide-content).

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hide-visually.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hide-visually.expect.css %}{% endhighlight %}
  </div>
</div>


## Horizontal rule

<div class="util">
{% highlight css %}@util hr([color], [vertical-margin]);{% endhighlight %}
</div>

#### Parameters

- `[color]` _(Optional)_ Default value: `#ccc`
- `[vertical-margin]` _(Optional)_ Default value: `1em`

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hr.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hr.expect.css %}{% endhighlight %}
  </div>
</div>


## Hover

<div class="util">
{% highlight css %}@util hover {
  [nested-rules]
}{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hover.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hover.expect.css %}{% endhighlight %}
  </div>
</div>


## No JS

<div class="util">
{% highlight css %}@util no-js {
  [nested-rules]
}{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/no-js.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/no-js.expect.css %}{% endhighlight %}
  </div>
</div>


## Reset list

<div class="util">
{% highlight css %}@util reset-list;{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/reset-list.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/reset-list.expect.css %}{% endhighlight %}
  </div>
</div>


## Text hide

<div class="util">{% highlight css %}@util text-hide;{% endhighlight %}</div>

CSS image replacement. Read more: [CSS image replacement technique (HTML5 Boilerplate)](https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757).

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/text-hide.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/text-hide.expect.css %}{% endhighlight %}
  </div>
</div>


## Triangle

<div class="util">
  {% highlight css %}@util triangle([size], [color], [orientation]);{% endhighlight %}
</div>

Create triangle figures.

<div class="center-block">
   <div class="row">
       <div class="col-3"><span class="triangle-down"></span></div>
       <div class="col-3"><span class="triangle-up"></span></div>
       <div class="col-3"><span class="triangle-left"></span></div>
       <div class="col-3"><span class="triangle-right"></span></div>
   </div>
   <div class="row">
       <div class="col-3"><span class="triangle-down-left"></span></div>
       <div class="col-3"><span class="triangle-up-left"></span></div>
       <div class="col-3"><span class="triangle-down-right"></span></div>
       <div class="col-3"><span class="triangle-up-right"></span></div>
   </div>
</div>

#### Parameters

- `[size]` _(Optional)_ Default value: `12px`
- `[color]` _(Optional)_ Default value: `#000`
- `[orientation]` _(Optional)_ Values: {`up`, `down`, `left`, `right`, `up-left`, `up-right`, `down-left`, `down-right`} Default value: `down`

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/triangle.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/triangle.expect.css %}{% endhighlight %}
  </div>
</div>


## Truncate

This mixin will truncate text, adding an ellipsis to represent overflow.

### Single line

<div class="util">
  {% highlight css %}@util truncate;{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate.expect.css %}{% endhighlight %}
  </div>
</div>

### Multiline

<div class="util">
  {% highlight css %}@util truncate([lines], [line-height]);{% endhighlight %}
</div>

#### Parameters

- `[lines]` number of lines
- `[line-height]` unitless line-height value

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate-multiline.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate-multiline.expect.css %}{% endhighlight %}
  </div>
</div>
