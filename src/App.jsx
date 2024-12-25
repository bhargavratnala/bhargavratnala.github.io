import Nav from './nav.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import SkillsProjects from './skills_projects.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Accounts from './Accounts.jsx'
import Contact from './contact.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <div className='w-full mainBody overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar' id="scroll-element">
        <Home />
        <About />
        <HashRouter>
          <Routes>
            <Route path='/' element={<SkillsProjects />}></Route>
            <Route path='/:projectName' element={<SkillsProjects />}></Route>
          </Routes>
        </HashRouter>
        <Experience />
        <Education />
        <Accounts />
        <Contact />
      </div>
    </>
  )
}

export default App
