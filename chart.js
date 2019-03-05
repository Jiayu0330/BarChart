var dataP = d3.csv("colors.csv");

var drawChart = function(colorData)
{
  var width = 400;
  var height = 200;
  var barWidth = width/colorData.length;

  console.log(barWidth);
  var svg = d3.select("svg")
              .attr("width",width)
              .attr("height",height);

  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
     {
       return i * barWidth;
     })
     .attr("y",function(d)
     {
       return height - d.num*10;
     })
     .attr("width",barWidth)
     .attr("height",function(d)
     {
       return d.num*10;
     })
     .attr("fill",function(d)
     {
       return d.color;
     })

  svg.selectAll("text")
     .data(colorData)
     .enter()
     .append("text")
     .text(function(d)
     {
       return d.num;
     })
     .attr("x",function(d,i)
     {
       return i * barWidth + 24;
     })
     .attr("y",function(d)
     {
       return height - d.num*11;
     })

  var legend = svg.append("g")
                  .attr("x",100)
                  .attr("y",100)
                  .attr("width",20)
                  .attr("height",20)
}


dataP.then(function(data)
{
  console.log("data",data)
  drawChart(data);
},
function(err)
{
  console.log(err)
});
