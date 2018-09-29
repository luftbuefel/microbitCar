let speed = 0
let receivedCommand = ""
function horn()  {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
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
radio.onDataPacketReceived( ({ receivedString }) =>  {
    receivedCommand = receivedString
    if (receivedCommand == "forward") {
        forward()
    } else if (receivedCommand == "back") {
        back()
    } else if (receivedCommand == "right") {
        right()
    } else if (receivedCommand == "left") {
        left()
    } else if (receivedCommand == "horn") {
        horn()
    } else {
        stop()
    }
})
radio.setGroup(1)
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
speed = 600
