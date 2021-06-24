import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

import ProtectedRoute from './helpers/protected-route';
import IsUserLoggedIn from './helpers/is-user-logged-in';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));

function App() {
  const { user } = useAuthListener();
  console.log('user', user);
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <IsUserLoggedIn path={ROUTES.LOGIN} loggedInPath={ROUTES.DASHBOARD} user={user}>
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn path={ROUTES.SIGN_UP} loggedInPath={ROUTES.DASHBOARD} user={user}>
              <SignUp />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE}>
              <Profile />
            </Route>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
