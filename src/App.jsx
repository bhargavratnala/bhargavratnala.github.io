import Nav from './nav.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import SkillsProjects from './skills_projects.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Contact from './contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <div className='w-full mainBody overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar' id="scroll-element">
        <Home />
        <About />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SkillsProjects />}></Route>
            <Route path='/:projectName' element={<SkillsProjects />}></Route>
          </Routes>
        </BrowserRouter>
        <Experience />
        <Education />
        <Contact />
      </div>
    </>
  )
}

export default App
