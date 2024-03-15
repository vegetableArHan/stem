function right () {
	
}
function rear () {
	
}
function left () {
	
}
function stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    if (r < 0) {
        r += 1
    } else {
        r = 0
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
function go () {
	
}
let light2 = 0
let speed = 0
let r = 0
pins.digitalWritePin(DigitalPin.P0, 90)
r = 1
let item = 2
stop()
basic.forever(function () {
    led.setBrightness(speed)
    if (r == 0) {
        if (item == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # . # # #
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . # . . .
                # # . . .
                . # # # #
                . # . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # . . . .
                # # # . #
                . . . # #
                . . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # # . # #
                . . # # .
                . . . # .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                # . # # #
                . # # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . # . . #
                . # # # #
                # # . . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # #
                # # # . #
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . # # .
                # # . # #
                . . . # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        stop()
        basic.clearScreen()
    }
})
basic.forever(function () {
    light2 = input.lightLevel() + 100
    if (light2 < 255) {
        light2 = 255
    }
    speed = light2
})
