// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Landing Page Builder',
   
    transformers: {
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link'
        }
      },

    plugins: [
     
           // Landing 
           {
            use: '@gridsome/source-filesystem',
            options: {
              typeName: 'Landing',
              path: './landing/*.md', // path: 'posts/**/*.md',
            }
          }
,
        // Guides
        {
            use: '@gridsome/source-filesystem',
            options: {
              path: 'landing/*.md',
              typeName: 'Landing1'
            }
          },
          {
            use: `gridsome-plugin-netlify-cms`,
            options: {
              publicPath: `/admin`
            }
          },

    ],
    
    templates: {

      Landing1: [
        {
          path: '/landing1/:title',
          component: './src/pages/Landing1.vue'
        }
      ]
      , 
      Landing2: [
        {
          path: '/landing2/:title',
          component: './src/pages/Landing2.vue'
        }
      ]
    } 

   
  


}

