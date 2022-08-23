import { AuthProvider } from "./auth/context"
import { AppRouter } from "./router"


export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
