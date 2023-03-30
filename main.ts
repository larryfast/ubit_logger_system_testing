radio.onReceivedNumber(function (receivedNumber) {
    z = receivedNumber % 10
})
let z = 0
z = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showString("" + (z))
    basic.pause(500)
})
