let mix = require('laravel-mix');

const CleanWebpackPlugin = require('clean-webpack-plugin');

// paths to clean
var pathsToClean = [
    'public/assets/css',
    'publuc/assets/js'
];

// the clean options to use
var cleanOptions = {};

mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
});

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

/*
 |--------------------------------------------------------------------------
 | app.blade
 |--------------------------------------------------------------------------
 */

// styles
mix.styles([
    'node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
    'node_modules/admin-lte/dist/css/AdminLTE.min.css',
    'node_modules/admin-lte/dist/css/skins/_all-skins.min.css'
], 'public/assets/css/app.css').version();

mix.copy([
    'node_modules/font-awesome/fonts/',
], 'public/assets/fonts');

// mix.copy(['resources/assets/font-awesome.min.css'], 'public/assets/css/icons.css');

mix.scripts([
    'node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
    'node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    'node_modules/admin-lte/bower_components/fastclick/lib/fastclick.js',
    'node_modules/admin-lte/dist/js/adminlte.min.js',
    'node_modules/admin-lte/dist/js/demo.js'
], 'public/assets/js/app.js').version();