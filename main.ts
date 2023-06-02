radio.onReceivedNumber(function (receivedNumber) {
    led.setBrightness(led.brightness() + receivedstring)
})
radio.onReceivedString(function (receivedString) {
    if (receivedstring == "POWER") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let receivedstring = ""
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
