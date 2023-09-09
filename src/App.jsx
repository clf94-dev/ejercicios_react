
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import { SideMenu } from './components/SideMenu/SideMenu';
import { Home } from './pages/Home/Home';
import { FirstExercise } from './pages/FirstExercise/FirstExercise';
import { SecondExercise } from './pages/SecondExercise/SecondExercise';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideMenu />}>
      <Route index element={<Home />} />
      <Route path="firstexercise" element={<FirstExercise />} />
      <Route path="secondexercise" element={<SecondExercise />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
