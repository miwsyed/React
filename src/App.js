import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Course from './components/Course';
import Allcourses from './components/Allcourses';








function App() {

  return (
   <div>
     {/* Navbar */}
     <Navbar />
     {/*  */}


      {/* Home */}
      <Home />
     {/*  */}

     {/* Home */}
     <Allcourses />
     {/*  */}

    

    
   </div>
  );
}

export default App;
