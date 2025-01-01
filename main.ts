input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.LcdInit(0)
    I2C_LCD1602.ShowString("Temperature: ", 0, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 12, 0)
    I2C_LCD1602.ShowString("C", 14, 0)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    I2C_LCD1602.LcdInit(0)
    I2C_LCD1602.ShowString("Mic on", 0, 0)
    record.startRecording(record.BlockingState.Nonblocking)
})
radio.onReceivedString(function (receivedString) {
    I2C_LCD1602.ShowString(receivedString, 0, 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Hi")
    I2C_LCD1602.LcdInit(0)
})
input.onGesture(Gesture.Shake, function () {
    I2C_LCD1602.LcdInit(0)
    I2C_LCD1602.ShowString("Stop!!!!!!!!!!!!!", 0, 0)
    music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
music.setVolume(255)
basic.showString("Hello!")
basic.showString("A/B")
I2C_LCD1602.LcdInit(0)
makerbit.showStringOnLcd1602("Press A or B", makerbit.position1602(LcdPosition1602.Pos1), 12)
basic.showString("A/B")
makerbit.showStringOnLcd1602("or logo", makerbit.position1602(LcdPosition1602.Pos17), 24)
makerbit.showStringOnLcd1602("or a+b s", makerbit.position1602(LcdPosition1602.Pos25), 32)
basic.showString("A+B")
radio.setGroup(1)
basic.forever(function () {
    if (input.logoIsPressed()) {
        record.playAudio(record.BlockingState.Nonblocking)
    }
})
