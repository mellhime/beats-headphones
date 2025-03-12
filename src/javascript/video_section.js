export default function createVideoPlayer () {
    const youtubeScriptId = 'youtube-api';
    const youtubeScript = document.getElementById(youtubeScriptId);

    if (youtubeScript === null) {
        const tag = document.createElement('script');
        const firstScript = document.getElementsByTagName('script')[0];

        tag.src = 'https://www.youtube.com/iframe_api';
        tag.id = youtubeScriptId;
        firstScript.parentNode.insertBefore(tag, firstScript);
    }

    window.onYouTubeIframeAPIReady = function() {
        window.player = new window.YT.Player("yt-player", {
            videoId: "N3YB8ODr9S4",
            playerVars: {
                modestbranding: 0,
                rel: 0,
                fs: 0,
                frameborder: 0,
                iv_load_policy: 3,
                enablejsapi: 1
            }
        });
    }
}
