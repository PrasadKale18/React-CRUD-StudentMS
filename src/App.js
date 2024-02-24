import './App.css';
import Navbars from './layout/Navbars';
import Home from './pages/Home';
import AddStudents from './students/AddStudents'
import EditStudents from './students/EditStudents';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <Router>
      <Navbars />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/addstudents' exact element={<AddStudents />} />
        <Route path='/editstudent/:id' exact element={<EditStudents />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
