const moonPath = "M15.5 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 1 15.5 12.3122 15.5 27.5Z";
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.querySelector('#darkMood');
let toggle = false;
// if it was true it will be toggled
//  make the sun clickable
darkMode.addEventListener('click', () => {
    // we should use Animate.js
    // here we set up the time line
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    // adding different animations to the timeline
    timeline.add({
            // it is like query selector
            targets: ".sun",
            d: [{ value: toggle ? sunPath : moonPath }]
        })
        .add({
                targets: '#darkMood',
                rotate: 320
            },
            "-=350"
        )
        .add({
            targets: "section",
            backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
            color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
        }, '-=700');
    // toggle switch
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});