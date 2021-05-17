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
     

        // Guides
        {
          use: '@gridsome/vue-remark',
          options: {
            typeName: 'Landing1', // Required
            baseDir: './landing1/', // Where .md files are located
            pathPrefix: '/l', // Add route prefix. Optional
            template: './src/pages/Landing1.vue' // Optional
          }
        },
          {
            use: `gridsome-plugin-netlify-cms`,
            options: {
              publicPath: `/admin`
            }
          },

    ]

   
  


}

