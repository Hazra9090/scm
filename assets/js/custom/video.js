function toggleVideo(event) {
  event.stopPropagation(); // Prevents additional events

  // Get the clicked container
  const container = event.currentTarget;

  // Find the video and replacement image inside the clicked container
  const video = container.querySelector(".project-video");
  const replacementImg = container.querySelector(".video-img");
  const playButton = container.querySelector(".play-btn");

  if (video.paused) {
    replacementImg.style.display = 'none';
    playButton.style.display = 'none';
    video.style.display = 'block';
    video.play();
    video.setAttribute('controls', '');
    container.classList.add('video-playing'); // Add class to change background color
  } else {
    video.pause();
    replacementImg.style.display = 'block';
    playButton.style.display = 'flex';
    video.style.display = 'none';
    video.removeAttribute('controls');
    container.classList.remove('video-playing'); // Remove class to restore background
  }
}
