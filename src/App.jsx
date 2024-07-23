import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { lazy, Suspense } from 'react'
import GlobalLoader from './components/Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ResetPassword from './pages/resetpassword/ResetPassword'
import AddBuilding from './pages/dashboard/lists/Components/addBuilding'
import UpdateBuilding from './pages/dashboard/buildinginfo/Components/updateBuilding'

const SignUpPage = lazy(() => import('./pages/signup/SignUp'))
const List = lazy(() => import('./pages/dashboard/lists'))
const General = lazy(() => import('./pages/dashboard/general'))
const Map = lazy(() => import('./pages/dashboard/map'))
const BuildingInfo = lazy(() => import('./pages/dashboard/buildinginfo'))
const Setting = lazy(() => import('./pages/dashboard/setting'))
const Profile = lazy(() => import('./pages/profile'))
const Sensors = lazy(() => import('./pages/dashboard/sensors/Sensors'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const Renovation = lazy(() => import('./pages/dashboard/renovation'))
const ForgetPassword = lazy(() =>
  import('./pages/forgetpassword/ForgetPassword')
)

const LoginPage = lazy(() => import('./pages/login/Login'))

const App = () => {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />

          <Route path="/dashboard/" element={<Dashboard />}>
            <Route index element={<Navigate replace to="list" />} />
            <Route path="addbuilding" element={<AddBuilding />} />

            <Route path="updatebuilding/:id" element={<UpdateBuilding />} />

            <Route path="profile" element={<Profile />} />
            <Route path="list" element={<List />} />
            <Route path="building-info/:id" element={<BuildingInfo />} />
            <Route path="general" element={<General />} />
            <Route path="renovation" element={<Renovation />} />
            <Route path="map" element={<Map />} />
            <Route path="service" element={<Setting />} />
            <Route path="sensors" element={<Sensors />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Suspense>
  )
}

export default App
