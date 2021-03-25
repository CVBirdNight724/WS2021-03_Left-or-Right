input.onButtonPressed(Button.AB, function () {
    score = 0
})
let y = 0
let x = 0
let ran = 0
let score = 0
score = 0
basic.forever(function () {
    basic.pause(randint(500, 1000))
    ran = randint(0, 1)
    if (ran == 0) {
        x = randint(0, 1)
        y = randint(0, 4)
    } else {
        x = randint(3, 4)
        y = randint(0, 4)
    }
    led.plot(x, y)
    for (let index = 0; index <= 1500; index++) {
        for (let index = 0; index <= 1500; index++) {
            if (input.buttonIsPressed(Button.A) && ran == 0) {
                score += 1
                basic.showNumber(score)
            } else if (input.buttonIsPressed(Button.B) && ran == 1) {
                score += 1
                basic.showNumber(score)
            }
        }
    }
    basic.clearScreen()
})
