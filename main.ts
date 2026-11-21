input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("mama pelona")
    basic.showString("y")
    basic.showString("cucumelena")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Duck)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
