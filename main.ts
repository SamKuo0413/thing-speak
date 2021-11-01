let _1 = 0
let _2 = 0
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("YHJH-04", "your_pwd")
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "PME0W3E16ZG9XBZE",
    _1,
    _2
    )
    ESP8266_IoT.uploadData()
})
basic.forever(function () {
    _2 += 1
    basic.pause(1000)
})
