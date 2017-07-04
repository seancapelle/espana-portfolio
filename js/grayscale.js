/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

// Image Gallery
var gallery = [
    {
        src: '<img src="./img/portfolio/LoftEnvironment2.jpg" class="pic margin-auto img-border" data-pic="5" style="height:300px;>',
        name: 'Loft Environment 2'
    },
    {
        src: '<img src="./img/portfolio/80TVProp.jpg" class="pic margin-auto img-border" data-pic="0" style="height:300px;">',
        name: '80s TV Prop'
    },
    {
        src: '<img src="./img/portfolio/FantasyPolearm1.png" class="pic margin-auto img-border" data-pic="1" style="height:300px;">',
        name: 'Fantasy Polearm 1'
    },
    {
        src: '<img src="./img/portfolio/FantasyPolearm2.png" class="pic margin-auto img-border" data-pic="2" style="height:300px;">',
        name: 'Fantasy Polearm 2'
    },
    {
        src: '<img src="./img/portfolio/HippoCharacterBust.jpg" class="pic margin-auto img-border" data-pic="3" style="height:300px;">',
        name: 'Hippo Character Bust'
    },
    {
        src: '<img src="./img/portfolio/LoftEnvironment1.jpg" class="pic margin-auto img-border" data-pic="4" style="height:300px;">',
        name: 'Loft Environment 1'
    },
    {
        src: '<img src="./img/portfolio/SpikeGrenade.png" class="pic margin-auto img-border" data-pic="6" style="height:300px;">',
        name: 'Spike Grenade'
    }
];

// Setup variables. Each letter corresponds to one of the display divs.
var a = 0;
var b = 1;
var c = 2;


//Show the pics on launch.
galleryUpdate();

$('#left-arrow').on('click', function() {
    a--;
    b--;
    c--;

    if (a < 0) {
        a = gallery.length - 1;
    }
    if (b < 0) {
        b = gallery.length - 1;
    }
    if (c < 0) {
        c = gallery.length - 1;
    }
  
    galleryUpdate();
});

$('#right-arrow').on('click', function() {
    a++;
    b++;
    c++;

    if (a > gallery.length - 1) {
        a = 0;
    }
    if (b > gallery.length - 1) {
        b = 0;
    }
    if (c > gallery.length - 1) {
        c = 0;
    }

    galleryUpdate();
});


function galleryUpdate(){
    
    // Clear the divs
    $('#view-1').html('');
    $('#view-2').html('');
    $('#view-3').html('');
    $('#pic-name').html('');

    // Append the pics
    $('#view-1').append(gallery[a].src);
    $('#view-2').append(gallery[b].src);
    $('#view-3').append(gallery[c].src);

    //Append pic name
    $('#pic-name').append(gallery[b].name);
}
