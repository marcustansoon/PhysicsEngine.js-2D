//@version=5
strategy("BTC Multi-Timeframe EMAs + MACD Strategy", overlay=true, default_qty_type=strategy.percent_of_equity, default_qty_value=10)

// === EMA Calculations ===
ema_50_1h = request.security(syminfo.tickerid, "60", ta.ema(close, 50))
ema_24_1h = request.security(syminfo.tickerid, "60", ta.ema(close, 24))

ema_50_2h = request.security(syminfo.tickerid, "120", ta.ema(close, 50))
ema_24_2h = request.security(syminfo.tickerid, "120", ta.ema(close, 24))



ema_50_4h = request.security(syminfo.tickerid, "240", ta.ema(close, 50))
ema_50_8h = request.security(syminfo.tickerid, "480", ta.ema(close, 50))
ema_50_12h = request.security(syminfo.tickerid, "720", ta.ema(close, 50))

ema_50_1d = request.security(syminfo.tickerid, "1D", ta.ema(close, 50))

// === Plot EMAs ===
plot(ema_24_1h, title="EMA-24 (1H)", color=color.orange, linewidth=2)
plot(ema_50_1h, title="EMA-50 (1H)", color=color.white, linewidth=2)
plot(ema_50_2h, title="EMA-50 (2H)", color=color.aqua, linewidth=2)
plot(ema_50_4h, title="EMA-50 (4H)", color=color.lime, linewidth=2)
plot(ema_50_8h, title="EMA-50 (8H)", color=color.fuchsia, linewidth=2)
plot(ema_50_12h, title="EMA-50 (8H)", color=color.purple, linewidth=2)
plot(ema_50_1d, title="EMA-50 (1D)", color=color.red, linewidth=2)

// === MACD Function ===
f_macd(src, fastLen, slowLen, signalLen) =>
    fast = ta.ema(src, fastLen)
    slow = ta.ema(src, slowLen)
    macdLine = fast - slow
    signal = ta.ema(macdLine, signalLen)
    hist = macdLine - signal
    [macdLine, signal, hist]

// === Get MACD ===
[macd_1h, signal_1h, hist_1h] = request.security(syminfo.tickerid, "60", f_macd(close, 12, 26, 9))
[macd_2h, signal_2h, hist_2h] = request.security(syminfo.tickerid, "120", f_macd(close, 12, 26, 9))
[macd_4h, signal_4h, hist_4h] = request.security(syminfo.tickerid, "240", f_macd(close, 12, 26, 9))
[macd_1d, signal_1d, hist_1d] = request.security(syminfo.tickerid, "1D", f_macd(close, 12, 26, 9))


// === Define a Threshold for "Horizontal" (Gradient Close to 0) ===
threshold = 15  // You can adjust this threshold value based on how flat you want to define the gradient

// === Calculate the Gradient of EMA-50 (1H) ===
ema_50_gradient = ema_50_1h - ema_50_1h[3]

// === Check if the gradient is close to zero (horizontal) ===
is_horizontal = math.abs(ema_50_gradient) < threshold

// Highlight regions where the gradient is horizontal
bgcolor(false ? color.new(#00ff08, 90) : na)




// === Entry Conditions ===
longCond = macd_1h > 0 and close > ema_50_1h * 1.005 and ema_50_1h > ema_50_8h 
shortCond = macd_1h < 0 and close < ema_50_1h * 0.995 and ema_50_1h < ema_50_8h  
// 2h
longCond_2h = macd_2h > 0 and close > ema_50_2h   and ema_50_2h > ema_50_8h 
shortCond_2h = macd_2h < 0 and close < ema_50_2h  and ema_50_2h < ema_50_8h  
// 4h
longCond_4h = macd_4h > 0 and close > ema_50_4h   and ema_50_4h > ema_50_1d  and 1
shortCond_4h = macd_4h < 0 and close < ema_50_4h  and ema_50_4h < ema_50_1d and 1

longCond_1d = macd_1d > 0 and close > ema_50_1d   //and ema_50_1d > ema_50_1d 
shortCond_1d = macd_1d < 0 and close < ema_50_1d // and ema_50_1d < ema_50_1d


var float positionNum = 0.0
var float positionNum_2h = 0.0
var float positionNum_4h = 0.0
var float positionNum_1d = 0.0


if (longCond)
    positionNum := 0.01
else if (shortCond)
    positionNum := -0.01
else
    positionNum := 0


if (longCond_2h)
    positionNum_2h := 0.02
else if (shortCond_2h)
    positionNum_2h := -0.02
else
    positionNum_2h := 0


if (longCond_4h)
    positionNum_4h := 0.04
else if (shortCond_4h)
    positionNum_4h := -0.04
else
    positionNum_4h := 0


if (longCond_1d)
    positionNum_1d := 0.1
else if (shortCond_1d)
    positionNum_1d := -0.1
else
    positionNum_1d := 0

total_position = positionNum + positionNum_2h + positionNum_4h + 0

// === Strategy Entries ===
if (total_position > 0)
    strategy.entry("Long", strategy.long, total_position)
else if (total_position < 0)
    strategy.entry("Short", strategy.short, math.abs(total_position))
else
    strategy.close("Short")
    strategy.close("Long")

// === Visual Markers ===
//plotshape(longCond, title="Long Entry", location=location.belowbar, color=color.green, style=shape.labelup, text="LONG")
//plotshape(shortCond, title="Short Entry", location=location.abovebar, color=color.red, style=shape.labeldown, text="SHORT")

// === Plot MACD (Optional, in main chart for quick ref)
//plot(macd_1h, title="MACD Line (1H)", color=color.teal)
//plot(signal_1h, title="Signal Line (1H)", color=color.gray)
