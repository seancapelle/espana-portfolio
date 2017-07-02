var gallery = [
    {
        src: '<img src="./images/portfolio/LoftEnvironment2.jpg" class="pic margin-auto img-border" data-pic="5" style="height:150px; width:262.23px;">',
        name: 'Loft Environment 2'
    },
    {
        src: '<img src="./images/portfolio/80TVProp.jpg" class="pic margin-auto img-border" data-pic="0" style="height:150px;">',
        name: '80s TV Prop'
    },
    {
        src: '<img src="./images/portfolio/FantasyPolearm1.png" class="pic margin-auto img-border" data-pic="1" style="height:150px;">',
        name: 'Fantasy Polearm 1'
    },
    {
        src: '<img src="./images/portfolio/FantasyPolearm2.png" class="pic margin-auto img-border" data-pic="2" style="height:150px;">',
        name: 'Fantasy Polearm 2'
    },
    {
        src: '<img src="./images/portfolio/HippoCharacterBust.jpg" class="pic margin-auto img-border" data-pic="3" style="height:150px;">',
        name: 'Hippo Character Bust'
    },
    {
        src: '<img src="./images/portfolio/LoftEnvironment1.jpg" class="pic margin-auto img-border" data-pic="4" style="height:150px;">',
        name: 'Loft Environment 1'
    },
    {
        src: '<img src="./images/portfolio/SpikeGrenade.png" class="pic margin-auto img-border" data-pic="6" style="height:150px;">',
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


// $('.pic').on('click', function() {
//     var index = $(this).data('pic');

//     console.log(index);

//     // openPhotoSwipe(index);
// })

$('#resume-btn').on('click', function() {
    window.open("assets/JonathanEspanaResume.pdf");
})

$('#email').on('click', function() {
    window.open("mailto:Jespana3D@gmail.com");
})

// PhotoSwipe
function openPhotoSwipe() {
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: './images/portfolio/80TVProp.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/FantasyPolearm1.png',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/FantasyPolearm2.png',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/HippoCharacterBust.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/LoftEnvironment1.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/LoftEnvironment2.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/portfolio/SpikeGrenade.png',
        w: 600,
        h: 400
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0// start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
};