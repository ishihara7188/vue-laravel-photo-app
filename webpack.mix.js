const mix = require('laravel-mix');

mix.browserSync('vue_laravel_photo_app.test')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();