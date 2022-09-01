
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

const onPlayer = function (evt) {
    localStorage.setItem(`videoplayer-current-time`, evt.seconds);
        
        console.log('played the video!');
};
player.on(`timeupdate`, throttle(onPlayer, 1000));

    player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
