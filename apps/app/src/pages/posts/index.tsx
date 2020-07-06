import React, { FC, useEffect } from 'react';

import { useStore } from '../../store';

import API from '../../utils/api';

const FETCH_POSTS: any = ({ dispatch }: any) => async (action: any) => {
  return API.posts().then((result: any) => {
    dispatch({
      type: 'SET_POSTS',
      payload: result
    })
  })
}

interface PostsProps {}
const Posts: FC<PostsProps> = (props: PostsProps) => {

  const [{ posts }, dispatch] = useStore({ FETCH_POSTS });

  if(!posts) {
    dispatch({ type: 'FETCH_POSTS'});
  }

  return <div className="posts page">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h1>/ Posts</h1>
            <p>All posts</p>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="row">
          {!posts && [1, 2, 3].map((v: number) => {
            return <div className="col-md-4 col-sm-4 shimmer" key={`shimmer-${v}`}>
              <div className="item">
                <div className="line fat shim-bg"></div>
                <div className="spacer"></div>
                <div className="line two-third shim-bg"></div>
              </div>
            </div>
          })}
          {posts && posts.length > 0 && posts.map((post: any) => {
            return <div className="col-md-4 col-sm-4" key={`data-${post.id}`}>
              <div className="item">
                <h2 className="color-white">{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default Posts;