import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Become-mentor from './pages/Become-mentor'
import Sessions from './pages/Sessions'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/become-mentor" element={<Become-mentor />} />
          <Route path="/sessions" element={<Sessions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}