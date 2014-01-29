var w = 500;
var h = 50;




//d3.select("body").append("p").text("New paragraph!");

//var dataset = [ 5, 10, 15, 20, 25 ];

/*var dataset = [ 25,  7, 5, 26, 11, 8, 25, 14, 23, 19,
    14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
    24, 18, 25, 9, 3 ];*/

/*var dataset = [];                        //Initialize empty array
for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.round(Math.random() * 30);  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}*/

/*d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) { return d; })
    .style("color", function(d) {
        if (d > 15) { //Threshold of 15
            return "red";
        } else {
            return "black";
        }
    });*/

//d3.select("body").selectAll("div")
//    .data(dataset)
//    .enter()
//    .append("div")
//    .attr("class", "bar")
//    .style("height", function(d) {
//        var barHeight = d * 5;  //Scale up by factor of 5
//        return barHeight + "px";
//    });

//Width and height

/*
var w = 500;
var h = 50;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)   // <-- Here
    .attr("height", h); // <-- and here!

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
    return (i * 50) + 25;
})
    .attr("cy", h/2)
    .attr("r", function(d) {
        return d;
    });

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");
*/



