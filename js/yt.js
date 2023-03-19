const channelId = "UCO24ZZpXZlp1fJhtE93aOsw";
const apiKey = "AIzaSyBWhedNatmmDNjBLrC0jRfjBwUcmFwDKC8";
const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
const url2 = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;
const url3 = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${apiKey}`;
const url4 = `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&key=${apiKey}`;

const channelThumbnailEl = document.querySelector(".channel-thumbnail");
const subscribersEl = document.querySelector(".subscribers");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const subs = data.items[0].statistics.subscriberCount;
    subscribersEl.innerHTML = `Subscribers: ${subs}`;
  })
  .catch((error) => {
    console.error(error);
    subscribersEl.innerHTML = "Subscribers: Can't fetch. Check channel.";
  });

// fetch channel banner
fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    const imageUrl =
      data.items[0].brandingSettings.image.bannerExternalUrl +
      "=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj";
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
    for (i = 1; i < noOfVids; i++) {}
  });
