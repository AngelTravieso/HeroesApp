import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/pages';
import { PrivateRoute, PublicRoute } from './';


export const AppRouter = () => {
  return (
    <>
        <Routes>

          {/* Rutas Públicas */}
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />


          {/* Rutas Privadas */}
          <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          } />


          {/* <Route path="login" element={<LoginPage /> } /> */}
          {/* <Route path="/*" element={<HeroesRoutes /> } /> */}

        </Routes>
    </>
  )
}
