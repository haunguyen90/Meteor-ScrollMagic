# ScrollMagic <a href='https://github.com/janpaepke/ScrollMagic/blob/master/CHANGELOG.md' class='version' title='Whats New?'>v2.0.3</a> [![Build Status](https://api.travis-ci.org/janpaepke/ScrollMagic.svg?branch=master)](https://travis-ci.org/janpaepke/ScrollMagic) 

### The javascript library for magical scroll interactions. [![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif "Shut up and take my money!")](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8BJC8B58XHKLL "Shut up and take my money!")

Hi, I am Andrew Lisowski and I ported this plugin to meteor. Many thanks to all the original author.

ScrollMagic helps you to easily react to the user's current scroll position.  
It's the perfect library for you, if you want to ...

* animate based on scroll position – either trigger an animation or synchronize it to the scrollbar movement (like a playback scrub control).
* pin an element starting at a specific scroll position – either indefinitely or for a limited amount of scroll progress (sticky elements).
* toggle CSS classes of elements on and off based on scroll position.
* effortlessly add parallax effects to your website.
* create an infinitely scrolling page (ajax load of additional content).
* add callbacks at specific scroll positions or while scrolling past a specific section, passing a progress parameter.

Check out [the demo page](http://scrollmagic.io), browse [the examples](http://scrollmagic.io/examples/index.html) or read [the documentation](http://scrollmagic.io/docs/index.html) to get started.

## About the Library

ScrollMagic is a scroll interaction library.

It's a complete rewrite of its predecessor [Superscrollorama](https://github.com/johnpolacek/superscrollorama) by [John Polacek](http://johnpolacek.com).  
A plugin-based architecture offers easy customizability and extendability.

To implement animations, ScrollMagic can work with multiple frameworks.
The recommended solution is the [Greensock Animation Platform (GSAP)](http://www.greensock.com/gsap-js/) due to its stability and feature richness. For a more lightweight approach the [VelocityJS](http://VelocityJS.org) framework is also supported. Alternatively custom extensions can be implemented or the necessity of a framework can be completely avoided by animating simply  using CSS and class toggles.

ScrollMagic was developed with these principles in mind:

* optimized performance
* lightweight (6KB gzipped)
* flexibility and extendibility
* mobile compatibility
* event management
* support for responsive web design
* object oriented programming and object chaining
* readable, centralized code and intuitive development
* support for both scroll directions (even different on one page)
* support for scrolling inside div containers (even multiple on one page)
* extensive debugging and logging capabilities
* detailed documentation
* many application examples

**Is ScrollMagic the right library for you?**  
ScrollMagic takes an object oriented approach using a controller for each scroll container and attaching multiple scenes defining what should happen at what part of the page. While this offers a great deal of control, it might be a little confusing, especially if you're just starting out with javascript.  
If the above points are not crucial for you and you are just looking for a simple solution to implement css animations I would strongly recommend taking a look at the awesome [skrollr](http://prinzhorn.github.io/skrollr/) project. It almost solely relies on element attributes and thus requires minimal to no javascript knowledge.

## Usage

The basic ScrollMagic design pattern is one controller, which has one or more scenes attached to it.  
Each scene is used to define what happens when the container is scrolled to a specific offset.

Here's a basic workflow example:

```javascript
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
		duration: 100,	// the scene should last for a scroll distance of 100px
		offset: 50		// start this scene after scrolling for 50px
	})
	.setPin("#my-sticky-element") // pins the element for the the scene's duration
	.addTo(controller); // assign the scene to the controller
```
To learn more about the ScrollMagic code structure, please [read here](https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic).

## Debug

Debug enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.

Here's how to activate debugging:

```javascript
// make a controller and add indicators to all scenes attached
var controller = new ScrollMagic.Controller({addIndicators: true});
// this scene will automatically have indicators added to it
new ScrollMagic.Scene()
               .addTo(controller);
```
To learn more about the ScrollMagic debugging, please [read here](http://scrollmagic.io/docs/debug.addIndicators.html#Scene.addIndicators).

## Help

To get started, check out the available learning resources [in the wiki section](https://github.com/janpaepke/ScrollMagic/wiki).  
Be sure to have a look at the [examples](http://janpaepke.github.com/ScrollMagic/examples/index.html) to get source code pointers and make use of the [documentation](http://janpaepke.github.com/ScrollMagic/docs/index.html) for a complete reference.

If you run into trouble using ScrollMagic please follow the [Troubleshooting guide](https://github.com/janpaepke/ScrollMagic/blob/master/CONTRIBUTING.md).  
Should you still be unable to figure it out, feel free to post your questions in the [project's issues section](https://github.com/janpaepke/ScrollMagic/issues).

## Browser Support

ScrollMagic aims to support all major browsers in recent versions:  
Firefox 26+, Chrome 30+, Safari 5.1+, Opera 10+, IE 9+

## About the Author

I am a digital creative based in Lausanne, Switzerland.  
I started this project to extend my understanding of javascript (which it has).

[Check out my website](http://www.janpaepke.de) or [Follow me on Twitter](http://twitter.com/janpaepke)

## License

ScrollMagic is dual licensed under the MIT license and GPL.  
For more information click [here](https://github.com/janpaepke/ScrollMagic/blob/master/LICENSE.md).

## Thanks

This library was made possible by many people who have supported it with passion, donations or advice. Special thanks go out to: [John Polacek](https://github.com/johnpolacek), [Jack Doyle](https://github.com/greensock), [Paul Irish](https://github.com/paulirish), [Nicholas Cerminara](https://github.com/ncerminara), [Kai Dorschner](https://github.com/krnlde), [Petr Tichy](https://github.com/petr-tichy) and [Dennis Gaebel](https://github.com/grayghostvisuals).
