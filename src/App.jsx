import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Topic from './pages/Topic';
import Admin from './pages/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main className='min-h-screen w-full bg-slate-900 text-white'>
      <div className="max-w-[1400px] mx-auto py-8">
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Dashboard />} />
            <Route path="/:id" element={<Topic />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
