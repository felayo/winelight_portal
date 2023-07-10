import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './pages/Public/Public'
import Login from './pages/auth/Login'
import DashLayout from './components/dashboardLayout/DashLayout'
import Home from './pages/dashboard/Home'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index="dashboard" element={<Home />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App

