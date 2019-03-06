var dataP = d3.csv("colors.csv");
var dataP2 = d3.json("colors.json");
dataSet = [dataP, dataP2];

var types = [".csv", ".json"]
var svgs = [];

var width = 400;
var height = 300;

types.forEach(function(d)
{
  var svg = d3.select(d)
              .attr("width",width + 200)
              .attr("height",height);

   svgs.push(svg);
});


var drawChart = function(colorData,svg)
{
  var barWidth = width/colorData.length;

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
       return height - d.num*20;
     })
     .attr("width",barWidth)
     .attr("height",function(d)
     {
       return d.num*20;
     })
     .attr("fill",function(d)
     {
       return d.color;
     })
     .attr("stroke","white")
     .attr("stroke-width",2);


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
     .attr("y",function(d,i)
     {
       return height - d.num*21;
     });

/*Add legend*/
  var legend = svg.append("g")

  legend.selectAll("rect")
        .data(colorData)
        .enter()
        .append("rect")
        .attr("x",function()
        {
          return 455;
        })
        .attr("y", function(d,i)
        {
          return 167 + i*20;
        })
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill",function(d)
        {
          return d.color;
        })

  legend.selectAll("text")
        .data(colorData)
        .enter()
        .append("text")
        .text(function(d)
        {
          return d.color;
        })
        .attr("x", function()
        {
          return 470;
        })
        .attr("y", function(d,i)
        {
          return 177 + i*20
        });
}

dataSet.forEach(function(d,i)
{
  d.then(function(data)
  {
    drawChart(data,svgs[i]);
  });
},
function(err)
{
  console.log(err);
});
