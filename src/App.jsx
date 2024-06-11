import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { store } from "./store";
import { lazy, Suspense } from "react";
import GlobalLoader from "./components/Loader";

const SignUpPage = lazy(() => import("./pages/signup/SignUp"));
const List = lazy(() => import("./pages/dashboard/lists"));
const General = lazy(() => import("./pages/dashboard/general"));
const Map = lazy(() => import("./pages/dashboard/map"));
const BuildingInfo = lazy(() => import("./pages/dashboard/buildinginfo"));
const Setting = lazy(() => import("./pages/dashboard/setting"));
const Profile = lazy(() => import("./pages/profile"));

const Dashboard = lazy(() => import("./pages/dashboard"));
const Renovation = lazy(() => import("./pages/dashboard/renovation"));
const ForgetPassword = lazy(() =>
  import("./pages/forgetpassword/ForgetPassword")
);

const LoginPage = lazy(() => import("./pages/login/Login"));
// const OtherComponent = lazy(() => import('./OtherComponent'));
const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<GlobalLoader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate replace to="list" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="list" element={<List />} />
              <Route path="building-info" element={<BuildingInfo />} />
              <Route path="general" element={<General />} />
              <Route path="renovation" element={<Renovation />} />
              <Route path="map" element={<Map />} />
              <Route path="service" element={<Setting />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
