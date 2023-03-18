const channelId = "UCO24ZZpXZlp1fJhtE93aOsw";
const apiKey = "AIzaSyBWhedNatmmDNjBLrC0jRfjBwUcmFwDKC8";
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
const url2 = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;

const channelThumbnailEl = document.querySelector(".channel-thumbnail");
const subscribersEl = document.querySelector(".subscribers");

fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // const subscriberCount = channelData.statistics.subscriberCount;
    // const thumbnailUrl = channelData.snippet.thumbnails.default.url;
    // console.log(channelData);
    // channelThumbnailEl.style.backgroundImage = `url(${thumbnailUrl})`;
    // subscribersEl.innerHTML = `Subscribers: ${subscriberCount}`;
  })
  .catch((error) => {
    console.error(error);
    subscribersEl.innerHTML = "Subscribers: Can't fetch. Check channel.";
  });

// fetch channel banner
fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.kind);
  });

// fetch channel image
const url3 = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${apiKey}`;
fetch(url3)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.items[0].snippet.thumbnails.default.url;
    const channelImage = document.querySelector(".channel-image");
    const image = document.createElement("img");
    image.src = imageUrl;
    channelImage.appendChild(image);
  });
