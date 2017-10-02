let mix = require('laravel-mix');
var path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var isProduction = (process.env.NODE_ENV === 'production');

mix.sass('assets/sass/app.scss', 'public/css')
   .copy('assets/img/', 'public/img')
   .copy('assets/fonts/', 'public/fonts')
   .js('assets/js/app.js', 'public/js')
   .webpackConfig({
        resolve: {
            modules: [
                'node_modules'
            ],
        }
   });

if(isProduction){
    mix.version();
}
