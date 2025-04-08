//@version=5
strategy( "BTC EMA50 + MACD Strategy", overlay=true, default_qty_type=strategy.percent_of_equity, default_qty_value=100, commission_type=strategy.commission.percent, commission_value=0.06 )
// === Inputs
emaLength = input.int(50, title="EMA Length")
macdShort = input.int(12, title="MACD Short Length")
macdLong = input.int(26, title="MACD Long Length")
macdSignal = input.int(9, title="MACD Signal Length")

// === Indicators
ema24 = ta.ema(close, 24)          // 1hr

ema50 = ta.ema(close, emaLength)   //  1hr
ema50_2h = request.security(syminfo.tickerid, "120", ta.ema(close, 50))//2hr
ema50_4h = request.security(syminfo.tickerid, "240", ta.ema(close, 50))//4hr
ema50_8h = request.security(syminfo.tickerid, "480", ta.ema(close, 50))//8hr
ema50_12h = request.security(syminfo.tickerid, "720", ta.ema(close, 50))//12hr
ema50_1d = request.security(syminfo.tickerid, "1D", ta.ema(close, 50))//1D
[macdLine, signalLine, _] = ta.macd(close, macdShort, macdLong, macdSignal)//1hr
[macdLine_2h, signalLine_2h, _] = request.security(syminfo.tickerid, "120", ta.macd(close, 12, 26, 9))//2h
[macdLine_4h, signalLine_4h, _] = request.security(syminfo.tickerid, "240", ta.macd(close, 12, 26, 9))//4h
[macdLine_8h, signalLine_8h, _] = request.security(syminfo.tickerid, "480", ta.macd(close, 12, 26, 9))//8h
[macdLine_12h, signalLine_12h, _] = request.security(syminfo.tickerid, "720", ta.macd(close, 12, 26, 9))//12h
[macdLine_1d, signalLine_1d, _] = request.security(syminfo.tickerid, "1D", ta.macd(close, 12, 26, 9))//1d


// === Conditions for 1h
longCondition = close > ema50 and macdLine > 0 and false
shortCondition = close < ema50 and macdLine < 0 and false

longCondition_2h = close > ema50_2h and macdLine_2h > 0 and false
shortCondition_2h = close < ema50_2h and macdLine_2h < 0  and false

longCondition_4h = close > ema50_4h and macdLine_4h > 0 and true
shortCondition_4h = close < ema50_4h and macdLine_4h < 0 and true

longCondition_8h = close > ema50_8h and macdLine_8h > 0 and true
shortCondition_8h = close < ema50_8h and macdLine_8h < 0 and true

longCondition_12h = close > ema50_12h and macdLine_12h > 0 and true
shortCondition_12h = close < ema50_12h and macdLine_12h < 0 and true

longCondition_1d = close > ema50_1d and macdLine_1d > 0 and true
shortCondition_1d = close < ema50_1d and macdLine_1d < 0 and true


// === Position Sizing
float positionSize = 0.0
float positionSize_2h = 0.0
float positionSize_4h = 0.0
float positionSize_8h = 0.0
float positionSize_12h = 0.0
float positionSize_1d = 0.0

if (longCondition)
    positionSize := 0.01
else if (shortCondition)
    positionSize := -0.01
else
    positionSize := 0
if (longCondition_2h)
    positionSize_2h := 0.02
else if (shortCondition_2h)
    positionSize_2h := -0.02
else
    positionSize_2h := 0
if (longCondition_4h)
    positionSize_4h := 0.04
else if (shortCondition_4h)
    positionSize_4h := -0.04
else
    positionSize_4h := 0


if (longCondition_8h)
    positionSize_8h := 0.08
else if (shortCondition_8h)
    positionSize_8h := -0.08
else
    positionSize_8h := 0

if (longCondition_12h)
    positionSize_12h := 0.08
else if (shortCondition_12h)
    positionSize_12h := -0.08
else
    positionSize_12h := 0

if (longCondition_1d)
    positionSize_1d := 0.24
else if (shortCondition_1d)
    positionSize_1d := -0.24
else
    positionSize_1d := 0

totalPosition = positionSize_2h + positionSize + positionSize_4h + positionSize_8h + positionSize_1d + positionSize_12h

// === Strategy Entries
if (totalPosition > 0)
    strategy.entry("Long", strategy.long, qty=totalPosition)
    strategy.close("Short")
else if (totalPosition < 0)
    strategy.entry("Short", strategy.short, qty=math.abs(totalPosition))
    strategy.close("Long")
else
    strategy.close("Long")
    strategy.close("Short")

// === Plotting
//plot(ema50, color=color.white, title="EMA50")
//plot(ema24, color=color.orange, title="EMA24")
//plot(ema50_2h, color=color.green, title="EMA50")
plot(ema50_4h, color=color.red, title="EMA50")
plot(ema50_8h, color=color.purple, title="EMA50")
plot(ema50_1d, color=color.blue, title="EMA50")





spreadThreshold = input.float(400, title="Minimum Divergence to Show", tooltip="Alert when spread exceeds this amount")

// Multi-timeframe EMAs
ema_1h  = request.security(syminfo.tickerid, "60", ta.ema(close, emaLength))
ema_2h  = request.security(syminfo.tickerid, "120", ta.ema(close, emaLength))
ema_4h  = request.security(syminfo.tickerid, "240", ta.ema(close, emaLength))
ema_1d  = request.security(syminfo.tickerid, "D", ta.ema(close, emaLength))


// Calculate current spread
maxEma = math.max(math.max(ema_2h, ema_1h), math.max(ema_4h, ema_1d))
minEma = math.min(math.min(ema_2h, ema_1h), math.min(ema_4h, ema_1d))
currentSpread = maxEma - minEma

// Store previous spread to detect rising divergence
var float prevSpread = na
isDiverging = na(prevSpread) ? false : currentSpread > prevSpread and currentSpread > spreadThreshold
prevSpread := currentSpread

// Plot divergence signal
//plotshape(isDiverging ? true : na, title="EMA Divergence", location=location.abovebar, style=shape.labeldown, text="Diverging", color=color.red, textcolor=color.white)

// Optional plots
//plot(currentSpread, title="EMA Spread", color=color.orange, linewidth=2, display=display.none)  // toggle on for debugging
