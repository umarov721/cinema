import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-around my-14">
      <div>
      <img className='w-[112px] h-[36px]' src="/images/Logo.png" alt="Logo" /> 
      </div>
      <div className='flex'>
      <img src="/images/Main.png" alt="smth" />
      <img src="/images/transfer.png" alt="smth" />
      <img src="/images/Monitoring.png" alt="smth" />
      <img src="/images/searcgh.png" alt="smth" />
      </div>
      <div className='flex items-center '>
      <img src="/images/Language.png" alt="smth" />
      <button className='w-[180px] h-[56px] bg-red-700 rounded-xl'>Войти</button>
      </div>
    </header>
  );
};

export default Header;
