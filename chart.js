var dataP = d3.json("colors.json");

var drawChart = function(colorData)
{
  var width = 400;
  var height = 200;

  var svg = d3.select("svg")
              .attr("width",width)
              .attr("height",height);

  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
     {
       return i = barWidth;
     })
     .attr("y",function(d)
     {
       return height = d.num*10;
     })


}
