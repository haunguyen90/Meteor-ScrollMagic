// SETTINGS
var
	MENU = {
		"basic": {
			title: "Basic",
			sub: {
				"simple_tweening.html" :	"Simple Tweening",
				"simple_pinning.html" :		"Simple Pinning",
				"going_horizontal.html" :	"Going Horizontal",
				"scene_manipulation.html" :	"Scene Manipulation",
				"debugging.html" :			"Debugging"
			}
		},
		"advanced": {
			title: "Advanced",
			sub: {
				"advanced_technology.html" :	"Advanced Tweening",
				"parallax.html" :				"Parallax",
				"container.html" :				"Container",
				"scrolling_anchors.html" :		"Scrolling Anchors",
				"mobile_advanced.html" :		"Mobile (Basic)",
				"custom_actions.html" :			"Custom Actions",
				"infinite_scrolling.html" :		"Infinite Scrolling"
			}
		},
		"expert": {
			title: "Expert",
			sub: {
				"cascading_pins.html" :				"Cascading Pins",
				"responsive_duration.html" :		"Responsive Duration",
				"manipulating_tweens.html" :		"Manipulating Tweens",
				"multiple_scroll_directions.html" :	"Multiple Scroll Directions",
				"mobile_advanced.html" :			"Mobile (Advanced)",
				"removing_and_destroying.html" :	"Removing and Destroying",
			}
		}
	};


// vars

var
	path = window.location.pathname.split("/"),
	isRoot = (path.length <= 1 || MENU[path[path.length-2]] == undefined);

// functions

function getCode($elem) {
	var
		source = $($elem)
				  .clone()
				  .html(),
		lines = source.split("\n"),
		linenumbers = "";


	// kill empty lines at start/end
	while (lines.length > 0 && $.trim(lines[0]) == "") {
		lines.shift();
	}
	while (lines.length > 0 && $.trim(lines[lines.length - 1]) == "") {
		lines.pop();
	}

	// make linenumbers
	for (var i = 1; i <= lines.length; i++) {
		linenumbers += i + "\n";
	}

	// normalize base indentation
	var tabAtStart = /^\t/g;
	while (lines[0].search(tabAtStart) > -1) {
		$.each(lines, function (index, value) {
			lines[index] = value.replace(tabAtStart, "");
		});
	}

	return {
		source: lines.join("\n"),
		linenumbers: linenumbers
	}
}

function showCode ($elem) {
	var
		code = getCode($elem);
	
	if ($elem.is("section.demo")) {
		// complicated but i want to keep identation.
		var $desc = $("div#example-wrapper section#titlechart").clone();
		$desc.find(":not(script)").remove();
		if ($desc.children().length > 0) {
			var startcode = getCode($desc);
			code.linenumbers = startcode.linenumbers + "᎒" + code.linenumbers;
			code.source = startcode.source + "᎒" + code.source;
		}
	}

	// insert
	var $code = 	$("<div></div>")
					.addClass("code")
					.text(code.source)
					.wrapInner("<pre></pre>"),
		$ln =		$("<div></div>")
					.addClass("linenumbers")
					.addClass("noselect")
					.html(code.linenumbers)
					.wrapInner("<pre></pre>"),
		$close = 	$("<div></div>")
					.attr("id", "closebutton");
	
	$("<div></div>")
		.attr("id", "codecontainer")
		.append($ln)
		.append($code)
		.append($close)
		.appendTo("body");
	
	$("body").css("overflow", "hidden"); // set overflow to hidden to avoid scrolling body while open.
	
	// highlight
	hljs.highlightBlock($code.get(0));

	$code.html($code.html().replace("᎒", '<div class="break noselect"> </div>'));
	$ln.html($ln.html().replace("᎒", '<div class="break noselect"></div>'));
}

function hideCode() {
	$("body > div#codecontainer").remove();
	$("body").css("overflow", "");
}

$(document).ready(function () {
	// prepare highlight js
	

	// build menu
	var $menu = $("ul#menu");
	if ($menu.length > 0) {
		$.each(MENU, function (key, value) {
			var
				path = isRoot ? key : "../" + key;
				$li = $("<li></li>").appendTo($menu),
				$a = $("<a href='" + path + "'>" + value.title + "</a>").appendTo($li),
				$ul_sub = $("<ul></ul>").appendTo($li);
			$.each(value.sub, function (key, value) {
				var
					$li = $("<li></li>").appendTo($ul_sub),
					$a = $("<a href='" + path + "/" + key + "'>" + value + "</a>").appendTo($li)
			})
		});

		if ($menu.parent().is("body")) {
			var
				$flag = $("<div>Menu</div>");
				$menuwrap = $("<div></div>")
							.addClass("menuwrap")
							.prependTo("body")
							.before($menu)
							.append($menu)
							.append($flag);
		}
	}

	// store initial HTML of code
	$("a.viewsource").each(function () {
		var $parent = $(this).parents("section.demo, div#example-wrapper, body").first().clone();
		$(this).data("code", $parent.clone());
	})

	// build sliders
	$("div.slider+input")
		.prop("disabled", true)
		.on("change", function () {
			$(this).prev().find(".handle").css("left", Math.round(($(this).val() - parseFloat($(this).attr("min"))) / (parseFloat($(this).attr("max")) - parseFloat($(this).attr("min"))) * 100) + "%");
		})
		.prev()
			.append("<div class=\"trackbar\"></div>")
			.append("<div class=\"handle\"></div>")


});

// event listener
$(document).on("click", "ul#menu > li > a", function (e) {
	e.preventDefault();
});

$(document).on("click", "a.viewsource", function (e) {
	e.preventDefault();
	showCode($(this).data("code"));
});

$(document).on("click", "#codecontainer #closebutton", hideCode);
$(document).on("keydown", function (e) {
	if (e.which == 27) {
		e.preventDefault();
		hideCode();
	}
});

// dragables / slider
$(document).on("mousedown", ".slider, .move", function (e) {
	var $this = $(this);
	if ($this.is(".slider") || e.target == this) { // only the element itself,  not the children, unless its the slider
		e.stopPropagation();
		var
			offset = $this.offset(),
			drag = {top: offset.top - $(document).scrollTop(), left: offset.left - $(document).scrollLeft()};
		if ($this.is(".move")) {
			drag.top -= e.pageY;
			drag.left -= e.pageX;
		}
		$this.data("drag", drag);
		$this.addClass("dragging");
		$("body").addClass("noselect");
	}
});

$(document).on("mouseup mousemove", function (e) {
	$(".move.dragging").each(function (f) {
		var data = $(this).data("drag");
		if (data) {
			$(this).css({
				top:  data.top + e.pageY,
				left: data.left + e.pageX
			});
		}
	})
	$(".slider.dragging").each(function (f) {
		var data = $(this).data("drag");
		if (data) {
			var
				pos = e.pageX - data.left,
				width = $(this).width(),
				$input = $(this).next("input"),
				min = parseFloat($input.attr("min")) || 0,
				max = parseFloat($input.attr("max")) || width,
				step = 1/parseFloat($input.attr("step")) || 1;
			if (pos <= 0) {
				pos = 0;
			}
			if (pos >= width) {
				pos = width;
			}
			var
				perc = pos/width,
				val = (max-min) * perc + min,
				decimals = Math.log(step) / Math.LN10;
			// mind the step
			val = Math.round(val*step)/step;
			$(this).find(".handle").css("left", pos);

			$input.val(val.toFixed(decimals));
			if ($(this).hasClass("liveupdate")) {
				$input.change();	
			}
		}
	})
	e.preventDefault();
});

$(document).on("mouseup", function (e) {
	$(".slider.dragging + input").change(); // trigger change
	$(".move.dragging, .slider.dragging")
		.data("drag", null)
		.removeClass("dragging");
	$("body").removeClass("noselect");
});


