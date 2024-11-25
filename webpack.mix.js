const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("src/js/app.js", "assets/app.js")
    .sass("src/css/styles.scss", "assets/app.css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    })