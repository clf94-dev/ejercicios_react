
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home/Home';
import { FirstExercise } from './pages/FirstExercise/FirstExercise';
import { SecondExercise } from './pages/SecondExercise/SecondExercise';

function App() {

  return (
  <div className='flex w-full'>
    <BrowserRouter>     
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/firstexercise' exact element={<FirstExercise />} />
        <Route path='/secondexercise' exact element={<SecondExercise />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
