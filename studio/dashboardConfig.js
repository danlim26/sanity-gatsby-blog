export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d139c73c3baca017e097cc7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k8n6ghqw',
                  apiId: '992b287d-fe89-4c84-980b-bac27f568be3'
                },
                {
                  buildHookId: '5d139c74b6bb4d01765b7c48',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ghr87jvn',
                  apiId: '8c59f660-2dd0-44de-b743-71ec923d48ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danlim26/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ghr87jvn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
