// Chart dimensions.
var svg = d3.select("svg"),
    position 
    margin = {top: 20, right: 120, bottom: 30, left: 50},
    w = 1080 - margin.left - margin.right,
    h = 500 - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(0,"+ h + ")");

var padding = 70;

var dataset, xScale, yScale, xAxis, yAxis, line;  //Empty, for now

//Function for converting CSV values from strings to Dates and numbers


//Load in data
d3.csv("data.csv", function(data) {

    var dataset = data;

    //Print data to console as table, for verification
    //console.table(dataset, ["date", "average"]);

    //Create scale functions
    xScale = d3.scaleLinear()
                   .domain([-220, 2018])
                   .range([padding, w-20]);

    yScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, function(d) { return +d.area; })])
                    .range([h - padding, 0]);

    //Define axes
    xAxis = d3.axisBottom()
               .scale(xScale)
               .ticks(10)
               .tickFormat(function(d){if (d < 0) {return "BC" + -d} else {return "AC" + d}});
               
    //Define Y axis
    yAxis = d3.axisLeft()
               .scale(yScale)
               .ticks(10);

    //Define line generators
    line = d3.line()
                .x(function(d) { return xScale(d.year); })
                .y(function(d) { return yScale(+d.area); });


    //Create SVG element
    var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    //Create lines
    var path = svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("d", line);
    
    var totalLength = path.node().getTotalLength();
    
    path
    .attr("stroke-dasharray", totalLength + "," + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(1500)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);
    
    //Create axes
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
    
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", margin.left - 25)
    .attr("x", 0 - (h / 2) + 30)
        .style("text-anchor", "middle")
        .text("Territory Area (10,000 Sq. km)");//add label

    svg.append("text")             
        .attr("transform",
              "translate(" + 870 + " ," + 
               420 + ")")
        .style("text-anchor", "end")
        .text("Year");



});