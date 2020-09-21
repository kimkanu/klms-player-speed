const TIMEOUT = 200;
let playerSpeedVisible = false;

tryLoadVideo();
updateStyle();

function updateStyle() {
  document.querySelector("#vod_footer .vod_speed").style.display = "block";
  document.querySelector(
    "#vod_footer .vod_speed .speed-btn-box"
  ).style.display = `${playerSpeedVisible ? "block" : "none"}`;
}

document.querySelector("#vod_footer").addEventListener("click", (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (!playerSpeedVisible) {
      playerSpeedVisible = true;
      updateStyle();
    }
    return;
  }
  if (playerSpeedVisible) {
    playerSpeedVisible = false;
    updateStyle();
  }
});

function tryLoadVideo() {
  window.wrappedJSObject.videoTag = document.querySelector("video");
  if (!window.wrappedJSObject.videoTag) {
    setTimeout(tryLoadVideo, TIMEOUT);
  } else {
    console.info("Found the video tag:", window.wrappedJSObject.videoTag);
  }
}
