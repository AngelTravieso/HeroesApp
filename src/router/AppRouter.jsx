import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/pages';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={<LoginPage /> } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />


            {/* <Route path="/*" element={<HeroesRoutes /> } /> */}

        </Routes>
    </>
  )
}
