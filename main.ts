radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 26) {
        basic.showString("" + (text_list[receivedNumber]))
        receivedmessage = "" + receivedmessage + text_list[receivedNumber]
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber == 75) {
        basic.showString(receivedmessage)
    } else {
        basic.showIcon(IconNames.Heart)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        receivedmessage = ""
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
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString(receivedmessage)
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
input.onGesture(Gesture.Shake, function () {
    receivedmessage = ""
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(75)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(message)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
let text_list: string[] = []
let message = 0
let receivedmessage = ""
radio.setGroup(1)
receivedmessage = ""
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
