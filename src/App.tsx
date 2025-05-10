import './App.css'
import AppNavbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Grades from './components/Grades/Grades';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AppNavbar />
      <main>
        <AboutMe />
        <Certificates />
        <Experience />
        <Grades />
      </main>
      <Footer />
    </>
  )
}

export default App
