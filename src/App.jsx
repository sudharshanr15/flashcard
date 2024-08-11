import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Topic from './pages/Topic';



function App() {
  return (
    <main className='min-h-screen w-full bg-slate-900 text-white'>
      <div className="max-w-[1400px] mx-auto py-8">
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Dashboard />} />
            <Route path="/:id" element={<Topic />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
