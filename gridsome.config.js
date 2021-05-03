// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Landing Page Builder beta.gouv',
   
    transformers: {
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link'
        }
      },

    plugins: [

        // Évènements
        {
          use: '@gridsome/source-airtable',
          options: {
            apiKey: 'keybQLCgbSWWJqps8',
            base: 'appTCC7VS12lEj0oV', // Évènements
            tables: [
                {
                    name: 'Planning', // required
                    typeName: 'Event', // required
                    select: {},
                    links: [{
                        fieldName: "Type",
                        typeName: "EventType",
                        linkToFirst: true
                    }]
                },
                {
                    name: 'Évènements', // required
                    typeName: 'EventType', // required
                    select: {},
                    links: []
                }
            ],
          },
        },

         // Designers et start-ups
        {
          use: '@gridsome/source-airtable',
          options: {
            apiKey: 'keybQLCgbSWWJqps8',
            base: 'appt60lhtZtqGytRF', // Base Designers 
            tables: [
                {
                    name: "Startups d'État", // required
                    typeName: 'Startup', // required
                },
                {
                    name: "Designers", // required
                    typeName: 'Designer', // required
                },
                {
                    name: "Missions", // required
                    typeName: 'Mission', // required
                }
            ],
          },
        },


        // Guides
        {
          use: '@gridsome/source-airtable',
          options: {
            apiKey: 'keybQLCgbSWWJqps8',
            base: 'app7SfpgBL8rbWw8V',
            tables: [
                {
                    name: 'Guides', // required
                    typeName: 'Guide', // required
                    select: {},
                    links: []
                }
            ],
          },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
              path: 'posts/**/*.md',
              typeName: 'Post'
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
        //Event: "/events/:id"
    }

}

