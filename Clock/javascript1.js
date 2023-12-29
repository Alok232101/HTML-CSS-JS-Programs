// Replace 'YOUR_API_KEY' with your YouTube API key
const apiKey = 'YOUR_API_KEY';
const videoId = 'YOUR_UNLISTED_VIDEO_ID';

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    
}

function onPlayerStateChange(event) {
    
}


const script = document.createElement('script');
script.src = https//www.youtube.com/watch?v=K4TOrB7at0Y
document.head.appendChild(script);
