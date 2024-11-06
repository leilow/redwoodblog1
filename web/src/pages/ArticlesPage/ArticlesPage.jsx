// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ArticlesPage = () => {
  return (
    <>
      <Metadata title="Articles" description="Articles page" />

      <h1>ArticlesPage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlesPage/ArticlesPage.jsx</code>
      </p>
      {/*
           My default route is named `articles`, link to me with:
           `<Link to={routes.articles()}>Articles</Link>`
        */}
    </>
  )
}

export default ArticlesPage
