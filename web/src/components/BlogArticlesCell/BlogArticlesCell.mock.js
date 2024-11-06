// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  blogArticles: [
    {
      __typename: 'blogArticles',
      id: 42,
    },
    {
      __typename: 'blogArticles',
      id: 43,
    },
    {
      __typename: 'blogArticles',
      id: 44,
    },
  ],
})
