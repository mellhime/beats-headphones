import "./glide"
import colorsListener from './colors_section.js';
import burgerNavigationListener from "./info_section.js";
import reviewsListener from "./reviews_section.js";
import teamDescriptionListener from "./team_section.js";
import { scrollListener } from "./common.js";

colorsListener()
burgerNavigationListener()
reviewsListener()
teamDescriptionListener()
scrollListener()

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount().update()
