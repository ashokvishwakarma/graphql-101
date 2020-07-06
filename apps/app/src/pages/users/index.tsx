import React, { FC } from 'react';

import { useStore } from '../../store';

import API from '../../utils/api';

const FETCH_USERS: any = ({ dispatch }: any) => async (action: any) => {
  return API.users().then((result: any) => {
    dispatch({
      type: 'SET_USERS',
      payload: result
    })
  })
}

interface UsersProps {}
const Users: FC<UsersProps> = (props: UsersProps) => {

  const [{ users }, dispatch] = useStore({ FETCH_USERS });

  if(!users) {
    dispatch({ type: 'FETCH_USERS' });
  }

  return <div className="category page">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h1>/ Users</h1>
            <p>All users</p>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="row">
          {!users && [1, 2, 3].map((v: number) => {
            return <div className="col-md-4 col-sm-4 shimmer" key={`shimmer-${v}`}>
              <div className="item">
                <div className="line fat shim-bg"></div>
                <div className="spacer"></div>
                <div className="line two-third shim-bg"></div>
              </div>
            </div>
          })}
          {users && users.length > 0 && users.map((user: any) => {
            return <div className="col-md-4 col-sm-4" key={`data-${user.id}`}>
              <div className="item">
                <h2 className="color-white">{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default Users;