var dataP = d3.json("colors.csv");

var drawChart = function(colorData)
{
  var width = 400;
  var height = 200;
  var barWidth = width/colorData.length;

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
     .attr("width",barWidth)
     .attr("height",function(d)
     {
       return d.num*10;
     })
     .fill("color"，function(d)
     {
       return d.color;
     });
}

dataP.then(function(data)
{
  console.log("data",data)
  drawChart(dara);
},
function(err)
{
  console.log(err)
});
