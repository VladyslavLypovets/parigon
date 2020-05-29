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
      'node_modules/jquery-nice-select/css/nice-select.css',
    ],
    sass: [],
  },
  scripts: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery-nice-select/js/jquery.nice-select.min.js',
    'node_modules/jquery.nicescroll/dist/jquery.nicescroll.min.js',
    'node_modules/wowjs/dist/wow.min.js',
  ],
};
