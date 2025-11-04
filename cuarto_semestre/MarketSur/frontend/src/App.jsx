import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TasksPages from './pages/TasksPages.jsx'
import TaskFormPage from './pages/TaskFormPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import {Container} from './components/ui/Container.jsx';
import {ProtectedRoutes} from './components/ProtectedRoutes.jsx';
import { useAuth } from './content/AuthContext.jsx';


function App() {
  const { isAuth } = useAuth();
 

  return (
    <Navbar>
      <Container className="py-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRoutes isAllowed={isAuth} redirectTo="/login" />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tareas" element={<TasksPages />} />
            <Route path="/tareas/crear" element={<TaskFormPage />} />
            <Route path="/tareas/:id" element={<TaskFormPage />} />
            <Route path="/tareas/editar/:id" element={<TaskFormPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Navbar >
  )
}

export default App