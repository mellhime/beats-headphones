import "./glide"
import colorsListener from './colors_section.js';
import burgerNavigationListener from "./info_section.js";
import reviewsListener from "./reviews_section.js";
import teamDescriptionListener from "./team_section.js";
import { initMap } from "./map_section.js"
import { smoothScrolling } from "./scroll.js";
import createVideoPlayer from "./video_section";

colorsListener()
burgerNavigationListener()
reviewsListener()
teamDescriptionListener()
smoothScrolling()
createVideoPlayer()

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount().update()

ymaps.ready(initMap);
