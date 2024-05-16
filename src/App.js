import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealList from './pages/MealList';
import AddMeal from './pages/AddMeal';
import ViewMeal from './pages/ViewMeal';
import UpdateMeal from './pages/UpdateMeal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MealList />}/>
        <Route path='/add' element={<AddMeal />}/>
        <Route path='/view/:id' element={<ViewMeal />}/>
        <Route path='/update/:id' element={<UpdateMeal />}/>
        {/* <Route path='/services' element={<Services />}/>
         Catch-all route for handling unknown routes */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
