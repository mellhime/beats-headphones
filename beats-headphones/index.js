import colorsListener from './javascript/_colors_section.js';
import burgerNavigationListener from "./javascript/_info_section.js";
import reviewsListener from "./javascript/_reviews_section.js";
import teamDescriptionListener from "./javascript/_team_section.js";
import { scrollListener } from "./javascript/_common.js";

colorsListener()
burgerNavigationListener()
reviewsListener()
teamDescriptionListener()
scrollListener()

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount().update()
