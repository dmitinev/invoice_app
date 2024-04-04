import { Route, Routes } from 'react-router-dom';
import { InvoiceDetailsPage } from './pages/InvoiceDetailsPage';
import { MainPage } from './pages/MainPage';
import { Page404 } from './pages/Page404';

function App() {
  return (
    <Routes>
      <Route path={import.meta.env.BASE_URL} element={<MainPage />} />
      <Route
        path={`${import.meta.env.BASE_URL}:invoiceId`}
        element={<InvoiceDetailsPage />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
