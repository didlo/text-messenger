radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 26) {
        basic.showString("" + (text_list[receivedNumber]))
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (message > 0) {
        message += -1
    } else {
        message = text_list.length - 1
    }
    basic.showString("" + (text_list[message]))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(99)
})
input.onButtonPressed(Button.B, function () {
    if (message + 1 < text_list.length) {
        message += 1
    } else {
        message = 0
    }
    basic.showString("" + (text_list[message]))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(message)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
let text_list: string[] = []
let message = 0
radio.setGroup(1)
message = 0
text_list = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
basic.showString("" + (text_list[message]))
