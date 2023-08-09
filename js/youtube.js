const channelId = "UCO24ZZpXZlp1fJhtE93aOsw";
const apiKey = "AIzaSyBWhedNatmmDNjBLrC0jRfjBwUcmFwDKC8";

const url_banner = `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id=${channelId}&key=${apiKey}`;
const url_pfp = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${channelId}&key=${apiKey}`;
const url_sub_count = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

const bannerClass = document.querySelector(".banner");
const pfpClass = document.querySelector(".pfp");
const subscribersEl = document.querySelector(".count");

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
  } catch (error) {
    console.log(error);
  }
}

fetchBanner();
fetchPfp();
