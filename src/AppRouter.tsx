import { BrowserRouter, Route } from 'react-router-dom'
import { RoutesNotFound } from './components/RoutesNotFound'
import { PrivateGuard } from "./guard/PrivateGuard"
import { AppRoutes } from './models'
import { PrivateRouter } from './private/PivateRouter'
import { AboutUs } from './public/about-us/AboutUs'
import { Contact } from './public/contact/Contact'
import { Footer } from './public/footer/Footer'
import { Home } from './public/home/home'
import { Login } from './public/login/Login'
import { Properties } from './public/properties/Properties'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.properties} element={<Properties />} />
        <Route path={AppRoutes.contact} element={<Contact />} />
        <Route path={AppRoutes.aboutUs} element={<AboutUs />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route element={<PrivateGuard />}>
          <Route path={`${AppRoutes.private.root}/*`} element={<PrivateRouter />} />
        </Route>
      </RoutesNotFound >
      <Footer/>
    </BrowserRouter>
  )
}