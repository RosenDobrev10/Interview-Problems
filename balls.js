function task1(input) {
    const balls = {};
    while (input[0] !== "End") {
        let [color, count] = input.shift().split(":");
        count = Number(count);
        if (!balls[color]) {
            balls[color] = 0;
        }
        balls[color] += count;
    }
    let sorted = Object.values(balls).sort((a, b) => a - b);
    let minimumBalls = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        minimumBalls += sorted[i];
    }
   return minimumBalls;
}
