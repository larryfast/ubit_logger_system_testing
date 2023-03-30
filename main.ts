radio.onReceivedNumber(function (receivedNumber) {
    z = receivedNumber % 10
})
input.onButtonPressed(Button.A, function () {
	
})
let z = 0
z = 0
radio.setGroup(1)
basic.forever(function () {
    led.toggle(0, 0)
    basic.showString("" + (z))
    basic.pause(500)
})
