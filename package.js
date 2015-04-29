Package.describe({
  name : "hipstersmoothie:scrollmagic",
  summary: "ScrollMagic helps you to easily react to the user's current scroll position.",
  version: "0.0.7",
  git: "https://github.com/hipstersmoothie/Meteor-ScrollMagic"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('infinitedg:gsap@1.16.0', 'client');
  api.addFiles('hipstersmoothie:scrollmagic.js', 'client');
  api.addFiles('plugins/animation.gsap.js', 'client');
  api.addFiles('plugins/debug.addIndicators.js', 'client');
});

Package.onTest(function(api) {
	api.use("tinytest");
  api.use("hipstersmoothie:scrollmagic", "client");
 	api.addFiles("hipstersmoothie:scrollmagic-tests.js", "client")
});