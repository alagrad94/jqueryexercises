$(document).ready(function() {

/* Use jQuery to get a reference to `load-songs`

    Attach a click handler to the button with jQuery. When
    the button is clicked, use $.ajax() to load `songs.json`
    from the file system

    Use jQuery to get a reference to `song-list`

    Chain a `.then()` method to the ajax call, and when
    it is complete build a DOM component for each song with
    the following structure. Use the jQuery append() method
    to put an HTML representation of each song the DOM as a
    child component of the .

        <section class="song">
            <h1 class="song__title">{Title of song}</h1>
            <section class="song__description">
                Performed by {artist} on the album {album}
            </section>
        </section>*/

const songList = $("#song-list");
const loadSongsButton = $("#load-songs");
loadSongsButton.text("Load Songs");
    loadSongsButton.click(function(){
        $.ajax({
            dataType : 'json',
            url: "http://localhost:8088/songs",
        }).then(function success (songs) {

            $.each(songs, function(i){
                let title = songs[i].title;
                let artist = songs[i].artist;
                let album = songs[i].album;

                songList.append(`<section class="song">
            <h1 class="song__title">${title}</h1>
            <section class="song__description">
                Performed by ${artist} on the album ${album}
            </section>
        </section>`)
            })

        });
    })


})