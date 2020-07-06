import React, { FC } from 'react';

import { useStore } from '../../store';

import API from '../../utils/api';

const FETCH_CATEGORIES: any = ({ dispatch }: any) => async (action: any) => {
  return API.categories().then((result: any) => {
    dispatch({
      type: 'SET_CATEGORIES',
      payload: result
    })
  })
}

interface CategoriesProps {}
const Categories: FC<CategoriesProps> = (props: CategoriesProps) => {
  const [{ categories }, dispatch] = useStore({ FETCH_CATEGORIES });

  if(!categories) {
    dispatch({ type: 'FETCH_CATEGORIES'})
  }

  return <div className="category page">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h1>/ Categories</h1>
            <p>All categories</p>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="row">
          {!categories && [1, 2, 3].map((v: number) => {
            return <div className="col-md-4 col-sm-4 shimmer" key={`shimmer-${v}`}>
              <div className="item">
                <div className="line fat shim-bg"></div>
                <div className="spacer"></div>
                <div className="line two-third shim-bg"></div>
              </div>
            </div>
          })}
          {categories && categories.length > 0 && categories.map((category: any) => {
            return <div className="col-md-4 col-sm-4" key={`data-${category.id}`}>
              <div className="item">
                <h2 className="color-white">{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default Categories;