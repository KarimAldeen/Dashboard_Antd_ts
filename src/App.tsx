import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Ui/Layout';
import { CrudRoute, menuItems } from './Routes';
import { Spin } from 'antd';

const Page404 = lazy(() => import('./Layout/Ui/NotFoundPage'));
const Auth = lazy(() => import('./Pages/Auth/Page'));

const App = () => {
  const renderRouteElement = (route: any) => (
    <Suspense fallback={<Spin />}>
      {route.withOutLayout ? (
        route.element ? route.element : <h1>Create the Page Ya Hemar</h1>
      ) : (
        <Layout>{route.element}</Layout>
      )}
    </Suspense>
  );

  const renderNestedRoutes = (routes: any) => (
    routes.map((childRoute: any) => (
      <Route
        key={childRoute.path ?? ""}
        path={childRoute.path ?? ""}
        element={renderRouteElement(childRoute)}
      />
    ))
  );

  return (
    <Routes>
      <Route key={"auth"} path={"/auth"} element={<Suspense fallback={<Spin />}>  <Auth /> </Suspense>} />
      <Route key={"Page404"} path={"/*"} element={<Suspense fallback={<Spin />}>  <Page404 /> </Suspense>} />

      {menuItems.map((route) => (
        route.children ? (
          renderNestedRoutes(route.children)
        ) : (
          <Route
            key={route.path ?? ""}
            path={route.path ?? ""}
            element={renderRouteElement(route)}
          />
        )

      ))}
      {CrudRoute.map((route) => (

        <Route
          key={route.path ?? ""}
          path={route.path ?? ""}
          element={renderRouteElement(route)}
        />


      ))}

    </Routes>
  );
};

export default App;
