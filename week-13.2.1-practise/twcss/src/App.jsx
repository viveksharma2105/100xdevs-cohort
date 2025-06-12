import { useState } from 'react';
import './App.css';
import { SlideBarClass1 } from './components/answers/1-basics-project';
import { SidebarToggle } from './components/icons/sideBar';

function App() {
  const [sideBarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Slidebar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent setSidebarOpen={setSidebarOpen} />
    </div>
  );
}

export default App;

function Slidebar({ sideBarOpen, setSidebarOpen }) {
  if (!sideBarOpen) {
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer hover:bg-slate-400"
          onClick={() => {
            setSidebarOpen(!sideBarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen transition-all duration-1000 shadow-sm w-0 sm:w-96 bg-pink-400">
      <div>
        <div
          className="cursor-pointer hover:bg-slate-400"
          onClick={() => {
            setSidebarOpen(!sideBarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
}

function MainContent({ setSidebarOpen }) {
  return (
    <div className="w-full">
      <div className="bg-black h-48 hidden md:block"></div>
      <div className="grid grid-cols-10 gap-8 p-8">
        <div className="h-96 bg-yellow-200 md:col-span-2 shadow-lg rounded-2xl -translate-y-12  col-span-11 hidden md:block"></div>
        <div className="h-96 bg-red-200 md:col-span-5 shadow-lg rounded-2xl col-span-11"></div>
        <div className="h-96 bg-green-200 md:col-span-3 shadow-lg rounded-2xl col-span-11"></div>
      </div>
    </div>
  );
}
