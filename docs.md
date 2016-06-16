---
layout: default
title: Documentation
---

## Aspect Ratio

<div class="util">
  {% highlight css %}@util aspect-ratio([ratio]);{% endhighlight %}
</div>

<div class="wrap-box">
  <div class="box-16-9">
    16:9
  </div>
</div>

#### Parameters

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| ratio | `<int>:<int>` | `16:9` | Yes |

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

Block-level element of an unknown height and width, centered vertically within his parent.

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

**Note:** You should add `position: relative` to the parent element.


## Center Block

<div class="util">
  {% highlight css %}@util center-block;{% endhighlight %}
</div>

Center block with a width.

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

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| radius | size | `100px` | Yes |
| color | color | `#000` | Yes |

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

### Clear Fix for old browsers

<div class="util">
  {% highlight css %}@util clearfix-ie8;{% endhighlight %}
</div>

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/clearfix-ie8.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/clearfix-ie8.expect.css %}{% endhighlight %}
  </div>
</div>


## HD Breakpoint

<div class="util">
{% highlight css %}@util hd([min-resolution]) {
  [nested-rules]
}{% endhighlight %}
</div>

Style adjustments for high resolution devices.

Read more:

- [HTML5 Boilerplate - The high resolution media query](https://github.com/h5bp/html5-boilerplate/commit/0d9f00826ac4a0154b6f2ed7ad0c127a124e3c34)
- [MDN - `<resolution>`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)

#### Parameters

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| min-resolution | resolution value (dpi | dppx) | `120dpi` | Yes |

**Note:** If you set `dpi` the utility will calculate the `dppx` equivalent, and vice versa.

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

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| color  | color | `#ccc` | Yes |
| vertical-margin  | size | `1em` | Yes |

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hr.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/hr.expect.css %}{% endhighlight %}
  </div>
</div>


## No Hover

<div class="util">
{% highlight css %}@util no-hover {
  [nested-rules]
}{% endhighlight %}
</div>

**Note:** You should add `.no-hover` class to the `html` tag when the browser or device doesn't support `hover`.

Similar to:

- [A shim for the Media Queries Level 4 `hover` media feature](https://github.com/twbs/mq4-hover-shim)

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

**Note:** You should add `.no-js` class to the `html` tag when the browser or device doesn't support JavaScript.

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

Remove default styles for lists.

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

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| size  | size | `12px` | Yes |
| color  | color | `#000` | Yes |
| orientation  | {`up`, `down`, `left`, `right`, `up-left`, `up-right`, `down-left`, `down-right`} | `down` | Yes |

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

Read more: [Line Clampin’ (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/).

#### Parameters

| Parameter | Type | Default | Optional |
|-----------|------|---------|----------|
| lines  | `int` | `3` | Yes |
| line-height  | unitless line-height value | `1` | Yes |

<div class="row">
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate-multiline.css %}{% endhighlight %}
  </div>
  <div class="col-6 col-sm-12">
    {% highlight css %}{% include css/truncate-multiline.expect.css %}{% endhighlight %}
  </div>
</div>

**Note:** Multiline ellipsis is [not supported by Firefox, Edge & IE](http://caniuse.com/#feat=css-line-clamp).
