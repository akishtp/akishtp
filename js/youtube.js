const channelId = "UCO24ZZpXZlp1fJhtE93aOsw";
const apiKey = "AIzaSyBWhedNatmmDNjBLrC0jRfjBwUcmFwDKC8";

const url_banner = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;
const url_pfp = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${apiKey}`;
const url_sub_count = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
const url_videos = `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&key=${apiKey}`;

const bannerClass = document.querySelector(".banner");
const pfpClass = document.querySelector(".pfp");
const subscribersClass = document.querySelector(".count");
const videosClass = document.querySelector(".videos");

async function fetchBanner() {
  try {
    const banner = await fetch(url_banner);
    if (banner.ok) {
      const in_json = await banner.json();
      const banner_url =
        in_json.items[0].brandingSettings.image.bannerExternalUrl;
      const banner_image = document.createElement("img");
      banner_image.src = banner_url;
      bannerClass.appendChild(banner_image);
    } else {
      throw Error("Could not fetch Banner Image");
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchPfp() {
  try {
    const pfp = await fetch(url_pfp);
    if (pfp.ok) {
      const in_json = await pfp.json();
      const pfp_url = in_json.items[0].snippet.thumbnails.default.url;
      const pfp_image = document.createElement("img");
      pfp_image.src = pfp_url;
      pfpClass.appendChild(pfp_image);
    } else {
      throw Error("Could not fetch Profile Pic");
    }
  } catch (error) {
    var htmlError = document.createTextNode(error);
    pfpClass.appendChild(htmlError);
  }
}

async function fetchSubCount() {
  try {
    const sub_count = await fetch(url_sub_count);
    if (sub_count.ok) {
      const in_json = await sub_count.json();
      const subs = in_json.items[0].statistics.subscriberCount;
      subscribersClass.innerHTML = `Subscribers: ${subs}`;
    } else {
      throw Error("Could not fetch Sub count");
    }
  } catch (error) {
    subscribersClass.innerHTML = "Subscribers: Can't fetch. Check channel 👉";
  }
}

async function fetchVideos() {
  try {
    const videos = await fetch(url_videos);
    if (videos.ok) {
      const in_json = await videos.json();
      in_json.items.map((video_details) => {
        if (video_details.id.kind === "youtube#video") {
          const video_id = video_details.id.videoId;
          const video_title = video_details.snippet.title;
          const published_at = video_details.snippet.publishedAt;
          const thumbnail_url = video_details.snippet.thumbnails.medium.url;
          var video_card =
            `<div class="video-card-wrapper"><a href="https://www.youtube.com/watch?v=${video_id}" class="video-card" target="_blank" title="Click to watch video">` +
            `<img src=${thumbnail_url} alt="video-thumbnail" />` +
            `<div class="video-title">${video_title}</div>` +
            `<div class="video-date">${formatDate(
              published_at
            )}</div></a></div>`;
          videosClass.innerHTML += video_card;
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

fetchBanner();
fetchPfp();
fetchSubCount();
fetchVideos();

function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
