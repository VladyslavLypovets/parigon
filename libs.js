'use strict';
/**
 * Содержит пути к библиотекам, установленных с помощью Yarn и компилирующихся в vendor.min.(css|js)
 */
module.exports = {
  styles: {
    css: [
      'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
      'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/animate.css/animate.min.css',
    ],
    sass: [],
  },
  scripts: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ],
};
