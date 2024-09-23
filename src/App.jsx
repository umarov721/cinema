import React from 'react';
import HomePage from './pages/home';
import MainLayout from './layout/mainlayout'; 

function App() {
  return (
    <div className='bg-main-black min-h-[100vh]'>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;
