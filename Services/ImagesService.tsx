import { google } from "googleapis";

const apiKey = "AIzaSyCLuwrPD2kmU_d_OwOt6ZYvawxDGQKPX9M";
const searchEngine = "004027064380088917151:bgibpyokzz0";
const search = google.customsearch("v1");

export default async function getImages(name: string) {
  return await search.cse
    .list({
      auth: apiKey,
      cx: searchEngine,
      q: name,
      num: 3,
      searchType: "image",
      imgSize: "huge",
    })
    .then((res) => {
      res.data.items?.map((item) => {
        return item.link;
      });
    });
}
