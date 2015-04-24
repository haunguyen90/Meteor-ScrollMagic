Package.describe({
  name : "hipstersmoothie:scrollmagic",
  summary: "ScrollMagic repackaged for Meteor.",
  version: "0.0.4",
  git: "https://github.com/hipstersmoothie/Meteor-ScrollMagic"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('infinitedg:gsap@1.16.0', 'client');
  api.addFiles('hipstersmoothie:scrollmagic.js', 'client');
});

Package.onTest(function(api) {
	api.use("tinytest");
  api.use("hipstersmoothie:scrollmagic", "client");
 	api.addFiles("hipstersmoothie:scrollmagic-tests.js", "client")
});