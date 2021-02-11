// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '@gouvfr/all/dist/css/all.min.css';
// TODO import JS to get hamberger menu on mobile?
//import '@gouvfr/all/dist/js/all.min.js';


import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set language to french
  head.htmlAttrs = { lang: 'fr' }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
