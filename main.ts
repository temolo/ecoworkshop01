input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(input.temperature())
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    for (let index = 0; index < 3; index++) {
        basic.showNumber(input.lightLevel())
        basic.pause(500)
    }
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
