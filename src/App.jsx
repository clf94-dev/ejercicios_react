
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home/Home';
import { FirstExercise } from './pages/FirstExercise/FirstExercise';
import { SecondExercise } from './pages/SecondExercise/SecondExercise';
import { FirstExerciseResults } from './pages/FirstExerciseResults/FirstExerciseResults';

function App() {

  return (
  <div className='flex w-full'>
    <BrowserRouter>     
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/firstexercise' exact element={<FirstExercise />} />
        <Route path='/firstresults' exact element={<FirstExerciseResults />} />
        <Route path='/secondexercise' exact element={<SecondExercise />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
