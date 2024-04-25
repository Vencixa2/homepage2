const popup = document.getElementById("spotify");
const button = document.getElementById("spotify-button");
const closeSpotify = document.getElementById("close-spotify");
    function togglePopup() {
        popup.classList.toggle("active");
        button.classList.toggle("active");
        closeSpotify.classList.toggle("active");
    }
    function removeClass() {
        popup.classList.remove("active");
    }

    let hrs = document.getElementById("hrs");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000)

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };