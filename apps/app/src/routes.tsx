import React, { FC, Suspense, lazy } from 'react';

import { useRoutes } from "hookrouter";

const PostsPage: any = lazy(() => import("./pages/posts"));
const UsersPage: any = lazy(() => import("./pages/users"));
const CategoriesPage: any = lazy(() => import("./pages/categories"));

const routes: any = {
  '/': () => <PostsPage />,
  '/users': () => <UsersPage />,
  '/categories': () => <CategoriesPage />
};

interface LoaderProps {}
const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  return <div className="loader">
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ripple" style={{ background: "0 0" }}>
      <circle cx="50" cy="50" r="4.719" fill="none" stroke="#88e088" strokeWidth="2">
        <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="3" keySplines="0 0.2 0.8 1" begin="-1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="3" keySplines="0.2 0 0.8 1" begin="-1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="27.591" fill="none" stroke="#88e088" strokeWidth="2">
        <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="3" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/>
        <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="3" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
}

interface EmptyProps {}
const Empty: FC<EmptyProps> = (props: EmptyProps) => {
  return <div className="empty">
    <h1 className="color-green">404 Error</h1>
    <p>The requested URL does not exists</p>
  </div>
}

interface RoutesProps {}
const Routes: FC<RoutesProps> = (props: RoutesProps) => {
  const match = useRoutes(routes);
  return <Suspense fallback={<Loader />}>
    {match || <Empty />}
  </Suspense>
}

export default Routes;