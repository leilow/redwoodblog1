// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  article: {
    __typename: 'Article',
    id: 42,
  },
})

import { Link, routes } from '@redwoodjs/router'

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <header>
            <h2>
              <Link to={routes.article()}>{article.title}</Link>
            </h2>
          </header>
          <p>{article.body}</p>
          <div>Posted at: {article.createdAt}</div>
        </article>
      ))}
    </>
  )
}
