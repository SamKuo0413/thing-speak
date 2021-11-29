Obloq_http.Obloq_WIFI_setup(
SerialPin.P12,
SerialPin.P8,
"22-5-4",
"22933825"
)
basic.forever(function () {
    Obloq_http.saveToThingSpeak(
    "PME0W3E16ZG9XBZE",
    input.runningTime(),
    input.acceleration(Dimension.X)
    )
})
