$(function () {
    $('#box').css({
        background: 'lightblue',
        height: '200px',
        width: '400px',
        padding: '30px',
    });

    $('#box').click((event) => {
        alert('la div à été cliquée');
        console.log(event);
    });
});

$(function () {
    $('h1').text('introduction à jQuery');
    $('#content').html('<p>coucou et  chalut</p>').css('color', 'purple');
});
