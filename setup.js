 var turn = 0
  var balls = Array.
    from({length:75}, (x, i) => i + 1).
    map(i => (i <= 15 ? "B" : i <= 30 ? "I" : i <= 45 ? "N" : i <= 60 ? "G" : "O") + i);
  var draws = balls.
    map(value => ({value, sort:Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)
  document.getElementById("sr_botones").innerText = draws[0]
  document.getElementById("cell0").innerText = draws[0]
  document.getElementById("cell0").style.backgroundColor = "black"
  document.getElementById("cell0").style.color = "white"
  document.getElementById("sr_botones").style.width = window.innerHeight  * .7 + "px"
  document.getElementById("sr_botones").style.height = window.innerHeight * .7 + "px"
  for (var i = 1; i < 75; i++) {
    document.getElementById("cell" + i).style.width = "6%"
    document.getElementById("cell" + i).style.color = "white"
