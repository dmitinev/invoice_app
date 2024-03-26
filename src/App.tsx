import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path={import.meta.env.BASE_URL} element={<MainPage />} />
    </Routes>
  );
}

export default App;
