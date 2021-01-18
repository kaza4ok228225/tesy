function doSomething () {
    Rand = randint(1, 2)
    if (Rand == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        A = 1
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        B = 1
    }
}
let B = 0
let A = 0
let Rand = 0
doSomething()
basic.forever(function () {
    if (A == 1) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            A = 0
            doSomething()
        }
    } else if (B == 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            B = 0
            doSomething()
        }
    }
})
