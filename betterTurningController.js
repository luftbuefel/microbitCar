input.onButtonPressed(Button.A, () => {
	
})
radio.setGroup(1)
radio.sendString("stop")
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("left")
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(250)
        radio.sendString("stop")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("right")
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.pause(250)
        radio.sendString("stop")
    } else if (input.acceleration(Dimension.Y) <= -544) {
        radio.sendString("forward")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.Y) >= 752) {
        radio.sendString("back")
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        radio.sendString("stop")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            `)
    }
})
