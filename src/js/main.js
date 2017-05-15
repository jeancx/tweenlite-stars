var master = new TimelineLite(),
    scene = $("#stars"),
    minX = 0,
    maxX = scene.width(),
    minY = 0,
    maxY = scene.width() * 0.5;

master.add(stars(), "-=1");


function stars() {
    var tl = new TimelineLite(),
        duration = 20,
        i = 20,
        repeats = 99999999999, //infinite
        stars = [],
        star, delay;
    while (--i > -1) {
        var x = Math.random() * ( maxX - minX ),
            y = Math.random() * ( maxY - minY );
        star = $("<img class='star' src='img/star.png'/>").appendTo(scene);
        stars.push(star);
        delay = Math.random() * duration;
        tl.set(star, {scale: 1, x: x, y: y}, delay);
        tl.add(TweenLite.to(star, {
                ease: Cubic.easeIn,
                repeat: repeats,
                repeatDelay: Math.random() * duration
            }),
            delay);
    }
    tl.set(stars, {display: "block"});
    return tl;
}

TweenLite.set("#stars", {visibility: "visible"});

