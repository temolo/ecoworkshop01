input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showNumber(input.temperature())
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    basic.pause(500)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
