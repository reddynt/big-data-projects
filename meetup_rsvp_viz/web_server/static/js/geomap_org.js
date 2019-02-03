$(document).ready(function(){

var url = "http://127.0.0.1:5001/meetup_rsvps";
var total_rsvps = 0;
var countries = [];
var top_countries = [];

/*
var my_function = function(){
document.getElementById("demo").innerHTML = dataset
}
*/

var width = 960;
var height = 500;

var projection = d3.geo.mercator()
                   .translate([width/2, height/2])
                   .scale(100)
                   .rotate([-180, 0, 0]);

var svg = d3.select("#svg").append("svg")
                           .attr("width", "100%")
                           .attr("height", height)

var path = d3.geo.path()
                 .projection(projection)

//var g = svg.append("g")

// load and display the world
d3.json("/static/js/world-110m2.json", function(error, topology){

// load and display the co-ordinates
d3.json(url, function(data){
    data.forEach(function(d){
        total_rsvps += 1;
        if(countries.hasOwnProperty([d["group"]["group_country"]])){
            countries[d["group"]["group_country"]] += 1;
        } else {
            countries[d["group"]["group_country"]] = 1;
        }
    })

    $("#total_rsvps").html(total_rsvps);
    for (var prop in countries){
        top_countries.push([prop, countries[prop]])
    }
    top_countries.sort(function(a, b){
        return b[1] - a[1]
    })
    
    top_10_countries = top_countries.slice(0, 10);
    $listSelector = $("#list");
    $.each(top_10_countries, function(i, obj){
        $listSelector.append("<li> " +obj[0] + obj[1]+"</li>" )
    });
    //console.log(countries)

    //console.log(top_countries.slice(0, 10).toString())
    $("#total_rsvps").html(total_rsvps);


    g.selectAll("circle")
     .data(data)
     .enter() 
     .append("a")
     .attr("xlink:href", function(d){
        return "https://www.google.com/search?q=" + d["venue"]["venue_name"];
        })
     .append("circle")
     .attr("cx", function(d){
        return projection([d["venue"]["lon"], d["venue"]["lat"]])[0];
        })
     .attr("cy", function(d){
        return projection([d["venue"]["lon"], d["venue"]["lat"]])[1];
        })
     .attr("r", 1.5)
     .style("fill", "red");
     /*
     g.selectAll("text")
     .data(data)
     .enter()
     .append("text")
     .attr("x", function(d){
        return projection([d["venue"]["lat"], d["venue"]["lon"]])[0];
        })
     .attr("y", function(d){
        return projection([d["venue"]["lat"], d["venue"]["lon"]])[1];
        })
     .attr("dy", -7)
     .style("fill", "black")
     .attr("text-anchor", "middle")
     .text(function(d){
        return d["venue"]["venue_name"];
        });*/
});
    svg.selectAll("path")
     .data(topojson.object(topology, topology.objects.countries).geometries)
     .enter()
     .append("path")
     .attr("d", path)
});

var zoom = d3.behavior.zoom()
                       .on("zoom", function(){
                       g.attr("transform","translate("+
                        d3.event.translate.join(",")+")scale("+d3.event.scale+")");
                        g.selectAll("path")
                        .attr("d", path.projection(projection));
                        });

svg.call(zoom)

$('#update').click(function(){

    $.ajax({
        type : "GET",
        url : "/update_rsvps",
        dataType : 'json',
        success : function(result){
            update_map(result);
        }
    });

});

var update_map = function(d){
    d.forEach(function(d){
        total_rsvps += 1;
        if(countries.hasOwnProperty([d["group"]["group_country"]])){
            countries[d["group"]["group_country"]] += 1;
        } else {
            countries[d["group"]["group_country"]] = 1;
        }
    })
    console.log(countries)
    top_countries = [];
    console.log(top_countries)
    for (var prop in countries){
        top_countries.push([prop, countries[prop]]);
    }
    top_countries.sort(function(a, b){
        return b[1] - a[1];
    })
    console.log(top_countries)
    $("#total_rsvps").html(total_rsvps);

    top_10_countries = top_countries.slice(0, 10);
    $listSelector = $("#list").empty();
    console.log(top_10_countries)
    $.each(top_10_countries, function(i, obj){
        $listSelector.append("<li> " +obj[0] + obj[1]+"</li>" )
    });

    g.selectAll(".dot")
     .data(d)
     .enter() 
     .append("a")
     .attr("xlink:href", function(d){
        return "https://www.google.com/search?q=" + d["venue"]["venue_name"];
        }) 
     .append("circle")
     .attr("cx", function(d){
        return projection([d.venue.lon, d.venue.lat])[0];
        })
     .attr("cy", function(d){
        return projection([d.venue.lon, d.venue.lat])[1];
        })
     .attr("r", 1.5)
     .style("fill", "yellow");
}
});
