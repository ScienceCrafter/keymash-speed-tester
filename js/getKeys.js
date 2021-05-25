
var keys = []
var keys_held = []
var keys_active = []

function keyPressed(event) {
  let x = event.which || event.keycode
  x = String.fromCharCode(x)
  if (keys_held.includes(x)) {
    return
  }
  keys_held.push(x)
  keys.push(x)
  updateVisual(x)
}

function keyReleased(event) {
  let x = event.which || event.keycode
  x = String.fromCharCode(x)
  keys_held.splice(keys_held.indexOf(x), 1)
}

function updateVisual(x) {
  if (!keys_active.includes(x)) {
    document.getElementById("key_stats").innerHTML += "<tr><td>" + x + "</td><td id='key_stats_"+x+"'></td></tr>"
    document.getElementById("key_stats_"+x).innerHTML += "<div id='key_stat_1_" + x + "' style='background:#f00;width:2px;'></div>" // 1s
    document.getElementById("key_stats_"+x).innerHTML += "<div id='key_stat_2_" + x + "' style='background:#0f0;width:2px;'></div>" // 10s
    document.getElementById("key_stats_"+x).innerHTML += "<div id='key_stat_3_" + x + "' style='background:#00f;width:2px;'></div>" // 1m
    keys_active.push(x)
  }
  document.getElementById("key_stat_1_" + x).style.width = 10 + parseInt(document.getElementById("key_stat_1_" + x).style.width)
  document.getElementById("key_stat_2_" + x).style.width = 1 + parseInt(document.getElementById("key_stat_2_" + x).style.width)
  document.getElementById("key_stat_3_" + x).style.width = (1/6) + parseFloat(document.getElementById("key_stat_3_" + x).style.width)
  setTimeout(function(){document.getElementById("key_stat_1_" + x).style.width = parseInt(document.getElementById("key_stat_1_" + x).style.width) - 10},1000)
  setTimeout(function(){document.getElementById("key_stat_2_" + x).style.width = parseInt(document.getElementById("key_stat_2_" + x).style.width) - 1},10000)
  setTimeout(function(){document.getElementById("key_stat_3_" + x).style.width = parseFloat(document.getElementById("key_stat_3_" + x).style.width) - (1/6)},60000)
}
