// document.write("<p>mansoure</p>")
// alert("hi")

// var x = prompt("number of your gools")

// console.log(x)
// if(x<10){alert("not good")}
// else if(x=100){alert("great")}

// else{alert("good")}
var name = prompt("inter yourvaferot playecristiano orMessi ")
function namePler() {
  while (name !== "cristiano" && name !== "Messi") {
    name = prompt("inter yourvaferot player cristiano or Messi ")
  }
}
namePler()


var stars = prompt("how will you give star for your star")
function showStars() {
  for (i = 1; i <= stars; i++) {
    document.write('<img src="https://stgabrielshuyton.net/nursery1920/wp-content/uploads/sites/30/2019/10/star-3.png"/>')
  }
}
showStars()