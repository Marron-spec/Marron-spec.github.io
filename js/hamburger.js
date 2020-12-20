$( function () {
    $( ".js-hamburger--bt" ).click( function() {
        $( this ).toggleClass( "is-open" );
        $( ".p-gnavi").toggleClass( "is-open" );
        $( "body" ).toggleClass( "is-open" );
    } );
} );
