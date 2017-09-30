function attachDescription(){
    $('.callback').click(function(){
        $(this).text($('#bio').val())});
}

$(document).ready(function(){

    $('body').ready(function(){
        $('#thankyou').hide() } );
    
    $('form').submit(function(){    // .submit used as a listener
        return false;
    });
    
    $('button').click(function(){

        $('#thankyou').fadeIn();            // thanks user for submitting info

        console.log($('form').serialize())  // sends machine data to console
        
        $('#cards').append(
            '<div class="card">' +
            '<img src=avatar.png>' +
            '<h3>(Default Avatar)</h3>' +
            '<h2>' + $('#first_name').val() + " "
                   + $('#last_name').val() + '</h2>' +
            '<p id=hidden class=callback>(Click HERE for description)</p>' +
            '</div>'
        );

        attachDescription();

    });
});