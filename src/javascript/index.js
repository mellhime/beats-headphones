import "./glide"
import colorsListener from './colors_section.js';

colorsListener()

const glide = new Glide('.glide', {
    perView: 1
})

glide.mount().update()
