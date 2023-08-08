const channelId = "UCO24ZZpXZlp1fJhtE93aOsw";
const apiKey = "AIzaSyBWhedNatmmDNjBLrC0jRfjBwUcmFwDKC8";
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
const url2 = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;
const url3 = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${apiKey}`;
const url4 = `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&key=${apiKey}`;

console.log(url4);

const channelThumbnailEl = document.querySelector(".channel-thumbnail");
const subscribersEl = document.querySelector(".subscribers");
var videosSection = document.getElementById("videos-section");

// fetch sub count
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const subs = data.items[0].statistics.subscriberCount;
    subscribersEl.innerHTML = `Subscribers: ${subs}`;
  })
  .catch((error) => {
    console.error(error);
    subscribersEl.innerHTML = "Subscribers: Can't fetch. Check channel 👉";
  });

// fetch channel banner
fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.items[0].brandingSettings.image.bannerExternalUrl;
    const channelImage = document.querySelector(".banner");
    const image = document.createElement("img");
    image.src = imageUrl;
    channelImage.appendChild(image);
  });

// fetch channel image
fetch(url3)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.items[0].snippet.thumbnails.default.url;
    const channelImage = document.querySelector(".channel-image");
    const image = document.createElement("img");
    image.src = imageUrl;
    channelImage.appendChild(image);
  });

fetch(url4)
  .then((response) => response.json())
  .then((data) => {
    const vidDetails = data.items;
    const noOfVids = vidDetails.length;
    for (i = 1; i < noOfVids; i++) {
      const videoId = vidDetails[i].id.videoId;
      const vidTitle = vidDetails[i].snippet.title;
      const publishedAt = vidDetails[i].snippet.publishedAt;
      const thumbnailUrl = vidDetails[i].snippet.thumbnails.medium.url;
      let animationClass = "";
      if (i % 2 == 0) {
        animationClass = "right-animation";
      } else {
        animationClass = "left-animation";
      }

      var videoHtml =
        `<a href="https://www.youtube.com/watch?v=${videoId}" class="video-card ${animationClass}" target="_blank" title="Click to watch video">` +
        `<img src=${thumbnailUrl} alt="video-thumbnail" />` +
        `<div class="video-title">${vidTitle}</div>` +
        `<div class="vid-date">${formatDate(publishedAt)}</div>` +
        `</a>`;

      videosSection.innerHTML += videoHtml;
    }
  });

function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
