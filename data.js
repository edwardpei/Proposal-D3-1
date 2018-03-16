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
                    .domain([0, d3.max( dataset, function(d) { return +d.area; })+100])
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

    
    var text = d3.select("body").append("p").attr("class","annotation");
    //Create lines
    var path = svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("d", line);
    var totalLength = path.node().getTotalLength();
    
    
   /* svg.append("circle").attr("cx", 626.9258266309205).attr("cy", 16.033755274261637).attr("r", 6.5).style("fill", "red").on("click", mouseClick_0);
    
    function mouseClick_0() {
       text.text("Yuan")
       .attr("x",100)
       .attr("y",30);
    
} */
    svg.append("circle").attr("cx", 70).attr("cy", 324.36286919831224).attr("r", 4).style("fill", "red").on("click", mouseClick_1);
    
    function mouseClick_1() {
        text.text("From BC 230 to BC 221, King Ying Zheng of Qin accomplished something no one believed would be possible : defeating all 6 other warring states in ten years and for the first time in history uniting China. Then he became the first emperor of China and built the first Great Wall of China.Althogh Qin dynasty quickly collapsed after his death, the political system of centralism monarchy that he designed lived on for more than 2000 years.")
       .attr("x",100)
       .attr("y",30);
}
      svg.append("circle").attr("cx", 93.08310991957104).attr("cy", 344.3291139240506).attr("r", 4).style("fill", "red").on("click", mouseClick_2);
  
       
    function mouseClick_2() {
        text.text("At 157 BC, Emperor Wu of Han, who is considered one of the greatest emperors of China's history, started his 54-year reign ---- a record not broken until 1,800 years later. Emperor Wu led a vast territorial expansion and successfully repelled the nomadic Xiongnu from systematically raiding northern China.He also achieved a development of a strong and centralized state resulting from his governmental re-organization, including his promotion of Confucian doctrines. ")
       .attr("x",100)
       .attr("y",30);
}
    
     svg.append("circle").attr("cx", 153.53887399463807).attr("cy", 285.1940928270042).attr("r", 4).style("fill", "black").on("click", mouseClick_3);

    function mouseClick_3() {
        text.text("At 9 AD, Wang Mang,who was a Han Dynasty official, usurped the throne from the Liu family and founded the Xin Dynasty, ruling 9–23 AD.The Han dynasty was restored years after his overthrow by Liu family.")
       .attr("x",100)
       .attr("y",30);
}
    
   /* svg.append("circle").attr("cx", 218.02502234137623).attr("cy", 290.01603375527426).attr("r", 4).style("fill", "black").on("click", mouseClick_4);
    
    function mouseClick_4() {
        text.text(" After the middle period of the Eastern Han, rampant corruption and injustice finally caused major rebellion from farmers in 184 AC, known as the Yellow Turbans Uprising.")
       .attr("x",100)
       .attr("y",30);
}
*/
        svg.append("circle").attr("cx", 257.2296693476318).attr("cy", 295.81603375527426).attr("r", 4).style("fill", "black").on("click", mouseClick_4_1);

        function mouseClick_4_1() {
        text.text("From AD 291 to 306, the regency over the developmentally disabled Emperor Hui of Jin led to War of the Eight Princes, which was a series of civil wars among princes. Country was significantly weakened by it and only 5 years later, it lost its capital and Emperor Huai of Jin was taken by Xiongnu. Country fled south, giving up large area of land.")
       .attr("x",100)
       .attr("y",30);
}
    
    console.log(xScale(439)); //93.08310991957104
    console.log(yScale(280)); //324.36286919831224
    
    
    svg.append("circle").attr("cx", 292.03753351206433).attr("cy", 330.1054852320675).attr("r", 4).style("fill", "red").on("click", mouseClick_4_2);

        function mouseClick_4_2() {
        text.text("Northern Wei was a dynasty founded by the Tuoba clan of race Xianbei in 386.Althogh it is not founded by race Han, Emperor Xiaowen compelled his own Xianbei people and others to adopt Chinese surnames, speak Chinese languages and wear Chinese clothes.The empire unified northern China in 439 AC, gaining large area of lands. ")
       .attr("x",100)
       .attr("y",30);
}
    
    svg.append("circle").attr("cx", 380.97319034852546).attr("cy", 311.0548523206751).attr("r", 4).style("fill", "red").on("click", mouseClick_5);
    
    function mouseClick_5() {
        text.text("At 626 AC, Emperor Taizong of Tang, who is considered to be one of the greatest emperors, usurped the throne from his brother. His era, the ''Reign of Zhenguan'' is considered a golden age during which Tang China flourished economically and militarily. For more than a century after his death, China enjoyed prosperity and peace while making large territorial expansion .")
       .attr("x",100)
       .attr("y",30);
}
    
    svg.append("circle").attr("cx", 427.23860589812335).attr("cy",  246.31645569620252).attr("r", 4).style("fill", "black").on("click", mouseClick_6);

    function mouseClick_6() {
        text.text("The An–Shi Rebellion,started at 755 AC by general An,was a devastating rebellion against the Tang dynasty. Emperor Xuanzong of Tang was blamed for over-trusting general An by giving him an army of 200,000. The rebellion and subsequent disorder resulted in a huge loss of life and large-scale destruction. It significantly weakened the Tang dynasty, and led to the loss of the Western Regions.")
       .attr("x",100)
       .attr("y",30);
}
   
    svg.append("circle").attr("cx", 651.8409294012511).attr("cy", 125).attr("r", 4).style("fill", "red").on("click", mouseClick_7);

    function mouseClick_7() {
        text.text("From 1368 to 1435, Ming dynasty thrived because of four diligent and determined Emperors. Although its territory is significantly smaller than Yuan, people of China enjoyed prosperity.")
       .attr("x",100)
       .attr("y",30);
}
    

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
    
    
    