import { createBrowserHistory } from 'history'
import * as React from 'react'
import {
  Redirect,
  Route,
  Router as BrowserRouter,
  Switch,
} from 'react-router-dom'
import Routes from '../constants/routes'
import PrivateRouteWrapper from './private-route-wrapper'

export const history = createBrowserHistory()

export const catchChunkError = (
  fn: Function,
  retriesLeft = 3,
  interval = 500
): Promise<{ default: React.ComponentType<any> }> => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: Error) => {
        // Ignore chunk cache error and retry to fetch, if cannot reload browser
        console.info(error)
        setTimeout(() => {
          if (retriesLeft === 1) {
            window.location.reload()
            return
          }
          catchChunkError(fn, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })
}

const LoginPage = React.lazy(() =>
  catchChunkError(() => import('../components/pages/login'))
)
const AuthenticatedPage = React.lazy(() =>
  catchChunkError(() => import('../components/pages/authenticated'))
)
const GraphqlPage = React.lazy(() =>
  catchChunkError(() => import('../components/pages/graphql'))
)
const SamplePage = React.lazy(() =>
  catchChunkError(() => import('../components/pages/sample'))
)

const Router = () => (
  <BrowserRouter history={history}>
    <React.Suspense fallback={null}>
      <Switch>
        <Route path={Routes.LOGIN} component={LoginPage} />
        <PrivateRouteWrapper>
          <Switch>
            <Route exact path={Routes.HOME} component={AuthenticatedPage} />
            <Route path={Routes.GRAPHQL} component={GraphqlPage} />
            <Route path={Routes.SAMPLE} component={SamplePage} />
          </Switch>
        </PrivateRouteWrapper>
        <Redirect to={Routes.LOGIN} />
      </Switch>
    </React.Suspense>
  </BrowserRouter>
)

export default Router
