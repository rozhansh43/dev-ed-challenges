const flightpath = {
    curviness: 1.25,
    // the motion it gets 0 is sharper
    autoRotate: true,
    // if it is true it will stay static and not gonna rotate
    values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -250 }
    ]
};
// the first one is the object we want to move
// the second is the duration
// third is the properties we want to animate
const tween = new TimelineLite();
tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightpath,
        ease: Power1.easeInOut
    })
);
// we add this because we want the movement by scrolling
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: ".animation",
        duration: 3000,
        triggerHook: 0
    })
    // when it gets to the .animation or section the scrolling will start
    .setTween(tween)
    .addIndicators()
    .setPin(".animation")
    .addTo(controller);