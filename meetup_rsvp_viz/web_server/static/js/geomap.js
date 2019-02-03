$(document).ready(function(){

var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

function getCountryName (countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

var url = "http://127.0.0.1:5001/meetup_rsvps";
var total_rsvps = 0;
var countries = [];
var top_countries = [];

var width = $("#svg").width();
//960;
var height = 650;

var svg = d3.select("#svg").append("svg")
                           .attr("width", width)
                           .attr("height", height)
                           .call(d3.behavior.zoom().on("zoom", function () {
                            svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
                            }))
                           .append("g")

var projection = d3.geo.mercator()
                   .translate([width/2, height/2])
                   .scale(200)
                   .center([0, 15])

var path = d3.geo.path()
                 .projection(projection)

var g = svg.append("g")

var tooltip = d3.select("body")
                .append("div")
                .style("z-index", 1001)
                .style("visibility", "hidden")
                .style("position", "absolute")
                .style("background", "black")
                .style("border-radius", "5px")
                .style("color", "#fff")
                .style("padding", "5px 0");


d3.json("/static/js/world-110m2.json", function(error, topology){
    if (error) throw error;

    g.selectAll("path")
       .data(topojson.object(topology, topology.objects.countries).geometries)
        .enter()
        .append("path")
        .attr("d", path);
})

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
        country_name = getCountryName(obj[0].toUpperCase());
        $listSelector.append("<li> <span class='flag flag-" + obj[0] + "'>" + "</span> " + " " + country_name + " " + obj[1] + "</li>" )
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
     .attr("r", 1.0 * zoom.scale())
     .style("fill", "#800080")
     .on("mouseover", function(d){
        //var mouse_ords = d3.mouse(SVGtooltip[0][0].parentNode);
        return tooltip.style("visibility", "visible")
                      .style("left", (d3.event.pageX + 16) + "px")//(mouse_ords[0] + 15) + "px")
                      .style("top", (d3.event.pageY + 16) + "px")//(mouse_ords[1] - 35) + "px")
                      .text(JSON.stringify(d["venue"]["venue_name"]));
     })
     .on("mouseout", function(d){
        return tooltip.style("visibility", "hidden")
                      .text(JSON.stringify(d["venue"]["venue_name"]));
     });
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

// open all hyperlinks in a new window
$(document).on('click', 'a', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    window.open(url, '_blank');
});

var zoom = d3.behavior.zoom()
                       .on("zoom", function(){
                       g.attr("transform","translate("+
                        d3.event.translate.join(",")+")scale("+d3.event.scale+")");
                        g.selectAll("path")
                        .attr("d", path.projection(projection));
                        });


svg.call(zoom)

var callAjax = function(){

    $.ajax({
        type : "GET",
        url : "/update_rsvps",
        dataType : 'json',
        success : function(result){
            update_map(result);
        }
    });

};

var update_map = function(d){
    d.forEach(function(d){
        total_rsvps += 1;
        if(countries.hasOwnProperty([d["group"]["group_country"]])){
            countries[d["group"]["group_country"]] += 1;
        } else {
            countries[d["group"]["group_country"]] = 1;
        }
    })
    top_countries = [];
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
        country_name = getCountryName(obj[0].toUpperCase());
        $listSelector.append("<li> <span class='flag flag-" + obj[0] + "'>" + "</span> " + " " + country_name + " " + obj[1] + "</li>" )
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
     .attr("r", 1.0)
     .style("fill", "#FFA500")
     .on("mouseover", function(d){
        //var mouse_ords = d3.mouse(SVGtooltip[0][0].parentNode);
        return tooltip.style("visibility", "visible")
                      .style("left", (d3.event.pageX + 16) + "px")//(mouse_ords[0] + 15) + "px")
                      .style("top", (d3.event.pageY + 16) + "px")//(mouse_ords[1] - 35) + "px")
                      .text(JSON.stringify(d["venue"]["venue_name"]));
     })
     .on("mouseout", function(d){
        return tooltip.style("visibility", "hidden")
                      .text(JSON.stringify(d["venue"]["venue_name"]));
     })
     .transition()
     .attr("r", 10.0)
     .ease("linear")
     .style("stroke", "#FFA500")
     .style("fill", "#FFA500")
     .duration(700)
     .delay(00)
     .transition()
     .attr("r", 1.0)
     ;

     
}

// reset button
$("#reset").click(function(){
    svg.selectAll("circle").remove();
    total_rsvps = 0;
    countries = [];
    top_countries = [];
    $('#myModal').modal('show');
})

//call ajax every 2 seconds
     setInterval(callAjax, 2000);

});
/*







});
*/