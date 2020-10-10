export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f81b0a5d1e6208121c0c2aa',
                  title: 'Sanity Studio',
                  name: 'sanity-solonotes-studio',
                  apiId: 'bcf691ee-7098-4e88-bfdb-e67ff9a8aa62'
                },
                {
                  buildHookId: '5f81b0a5d8f8af73b1e2c35c',
                  title: 'Blog Website',
                  name: 'sanity-solonotes',
                  apiId: '8c7e7402-444b-43d1-8593-645618d10b45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hamanovich/sanity-solonotes',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-solonotes.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
