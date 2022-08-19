import { Routes, Route } from 'react-router-dom';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/pages';


export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={<LoginPage /> } />

            <Route path="/*" element={<HeroesRoutes /> } />

        </Routes>
    </>
  )
}
