import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayouts'

import Posts from '../pages/Posts'
import PostDetail from '../pages/PostDetail'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/"  element={<Posts />} />
        <Route path="/post-detail/:issueNumber" element={<PostDetail />} />
      </Route>
    </Routes>
  )
}