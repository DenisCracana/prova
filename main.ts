basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (input.lightLevel() < 70) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # # . .
            # . # . .
            # . # . .
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . #
            . # . . #
            `)
    } else {
        basic.clearScreen()
    }
})
