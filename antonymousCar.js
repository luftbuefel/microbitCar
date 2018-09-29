//This is done with an ultrasonic sensor

let last_state = ""
let current_state = ""
let speed = 0
let distanceToWall = 0
function horn()  {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Half))
}
function forward()  {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function left()  {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function stop()  {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function back()  {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function right()  {
    pins.analogWritePin(AnalogPin.P1, speed)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, speed)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function update_state()  {
    if (current_state != last_state) {
        if (current_state == "forward") {
            forward()
        } else if (current_state == "right") {
            right()
        }
        last_state = current_state
    }
}
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
speed = 600
last_state = "stop"
basic.forever(() => {
    distanceToWall = sonar.ping(
    DigitalPin.P6,
    DigitalPin.P5,
    PingUnit.Centimeters
    )
    if (distanceToWall <= 11) {
        current_state = "right"
    } else {
        current_state = "forward"
    }
    update_state()
})
