'use strict';

var Dacoda  = require('dacoda').Dacoda;
var dacoda  = new Dacoda();
var postcss = require('postcss');
var prism   = require('./index.prism.js');
var plugins = [
	require('postcss-utilities')
];
var container = document.createElement('span');
var output    = document.createElement('span');

container.className = 'dacoda-container';
output.className    = 'dacoda-output';

document.addEventListener('DOMContentLoaded', function () {
var defaultValue = '.margin {\r\n\t@util margin(10px 20px 30px null);\r\n}\r\n\r\n.border-color {\r\n\t@util border-color(red blue green yellow);\r\n}\r\n\r\n.border-style {\r\n\t@util border-color(dashed solid null dotter);\r\n}\r\n\r\n.padding {\r\n\t@util padding(null 2em 3em null);\r\n}\r\n\r\n.border-radius {\r\n\t@util border-top-radius(4px);\r\n}\r\n\r\n.word-wrap {\r\n\t@util word-wrap;\r\n}\r\n\r\n.position {\r\n\t@util position(absolute, 10px 20px null 5px);\r\n}\r\n\r\n.footer {\r\n\t@util sticky-footer;\r\n}\r\n\r\n.trunc {\r\n\t@util truncate;\r\n}\r\n\r\n.trunc-multiline {\r\n\t@util truncate(3, 1.5);\r\n\tfloat: left;\r\n}\r\n\r\n.cfx {\r\n\tfloat: left;\r\n\t@util clearfix;\r\n}\r\n\r\n.cfx-ie8 {\r\n\tfloat: left;\r\n\t@util clearfix-ie8;\r\n}\r\n\r\n.center {\r\n\t@util center;\r\n}\r\n\r\n.center-block {\r\n\t@util center-block;\r\n}\r\n\r\n.circle {\r\n\tborder: 3px;\r\n\t@util circle(354em, lime);\r\n}\r\n\r\n.circle-default {\r\n\t@util circle;\r\n}\r\n\r\nhr {\r\n\t@util hr;\r\n}\r\n\r\n.hr-custom {\r\n\t@util hr(red, 5em);\r\n}\r\n\r\nul {\r\n\tcolor: black;\r\n\t@util reset-list;\r\n}\r\n\r\n.text-hide {\r\n\t@util text-hide;\r\n}\r\n\r\n.text-hide-2 {\r\n\t@util text-hide(2);\r\n}\r\n\r\n.tri-up {\r\n\t@util triangle(30px, red, up);\r\n}\r\n\r\n.tri-down {\r\n\t@util triangle(15px, #000, down);\r\n}\r\n\r\n.tri-left {\r\n\t@util triangle(15px, #000, left);\r\n}\r\n\r\n.tri-right {\r\n\t@util triangle(15px, #000, right);\r\n}\r\n\r\n.tri-up-right {\r\n\t@util triangle(15px, #000, up-right);\r\n}\r\n\r\n.tri-down-right {\r\n\t@util triangle(15px, #000, down-right);\r\n}\r\n\r\n.tri-up-left {\r\n\t@util triangle(15px, #000, up-left);\r\n}\r\n\r\n.tri-down-left {\r\n\t@util triangle(15px, #000, down-left);\r\n}\r\n\r\n.aspect-ratio {\r\n\t@util aspect-ratio(4:3);\r\n}\r\n\r\n.hide-visually { \r\n\t@util hide-visually;\r\n}\r\n\r\n@util no-hover {\r\n\t.a {\r\n\t\tfloat: left;\r\n\t}\r\n}\r\n\r\n@util no-js {\r\n\t.a {\r\n\t\tfloat: left;\r\n\t}\r\n}\r\n\r\n@util hd {\r\n\t.a {\r\n\t\tfloat: left;\r\n\t}\r\n\r\n\t.b {\r\n\t\ttop: 0;\r\n\t}\r\n}\r\n\r\n@util hd(192dpi) {\r\n\t.a {\r\n\t\tfloat: left;\r\n\t}\r\n}\r\n\r\n@util hd(2.75dppx) {\r\n\t.a {\r\n\t\tfloat: left;\r\n\t}\r\n}';

	//var defaultValue = '$blue: #056ef0;\n$column: 200px;\n\n@define-mixin icon $name {\n\tpadding-left: 16px;\n\n\t&::after {\n\t\tcontent: "";\n\t\tbackground-url: url(/icons/$name.png);\n\t}\n}\n\n@define-extend bg-green {\n\tbackground: green;\n}\n\n@define-extend bg-yellow {\n\tbackground: yellow;\n}\n\n.search {\n\t@mixin icon search;\n\n\t@extend bg-green;\n}\n\n.menu {\n\tbackground: color($blue blackness(20%));\n\twidth: calc(4 * $column);\n}\n\n.notice {\n\t@if 3 < 5 {\n\t\t@extend bg-green;\n\t} @else {\n\t\t@extend bg-yellow;\n\t}\n}\n\n@for $i from 10 to 30 by 10 {\n\t.col-$i { width: $i%; }\n}\n\n@each $icon in (foo, bar, baz) {\n\t.icon-$(icon) {\n\t\tbackground: url(icons/$icon.png);\n\t}\n}';

	dacoda.element.input.value = location.href.slice(-1) === '#' || location.hash ? fromHash(location.hash.slice(1)) : defaultValue;

	dacoda.observe('keydown').then(onkeydown);

	dacoda.observe('input').then(oninput);

	dacoda.dispatch('input');

	container.appendChild(dacoda.element.block);
	container.appendChild(output);

	document.body.appendChild(container);
});

function onkeydown(event) {
	if (event.keyCode === 9) return ontab.call(this, event);
	if (event.metaKey && event.keyCode === 83) return onsave.call(this, event);
}

function ontab(event) {
	var input = dacoda.element.input;
	var end = dacoda.current.end;
	var value = dacoda.current.value;

	// prevent default action
	event.preventDefault();

	// insert tab character
	input.value = value.slice(0, end) + '\t' + value.slice(end);

	// update selection range
	input.selectionStart = input.selectionEnd = end + 1;

	// dispatch value change event
	dacoda.dispatch('input', event);
}

function oninput(event) {
	var before = dacoda.current.value;
	var after  = before;

	// try to process output
	try {
		after = postcss(plugins).process(before, {
			parser: require('postcss-scss')
		}).then(function (result) {
			output.innerHTML = Prism.highlight(String(result.css), Prism.languages.cssnext);
		});
	} catch (e) {}

	// set style and output
	dacoda.element.style.innerHTML  = Prism.highlight(before,  Prism.languages.cssnext);
}

// save event
function onsave(event) {
	// prevent default action
	event.preventDefault();

	location.hash = toHash(dacoda.current.value);
}

function fromHash(string) {
	return decodeURIComponent(string.replace(/\+/g, ' '));
}

function toHash(string) {
	return encodeURIComponent(string)
		.replace(/%20/g, '+')
		.replace(/%24/g, '$')
		.replace(/%26/g, '&')
		.replace(/%3A/g, ':')
		.replace(/%3B/g, ';')
		.replace(/%40/g, '@');
}
