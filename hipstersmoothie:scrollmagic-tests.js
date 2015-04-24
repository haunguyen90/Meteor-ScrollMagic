Tinytest.add("Scroll Magic - Integration Test", function(test) {
	test.instanceOf(ScrollMagic.Controller, Function, "ScrollMagic - Controller not found");
	test.instanceOf(ScrollMagic.Scene, Function, "ScrollMagic - Scene not found");
});