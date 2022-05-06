hummingbird.startHummingbird()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        0,
        0
        )
        basic.pause(500)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        100,
        0
        )
        basic.pause(500)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        100,
        0
        )
        basic.pause(500)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        basic.pause(500)
    }
})
