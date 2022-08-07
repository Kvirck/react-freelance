import './App.scss'
import { Main, CreateProject } from './page'
import { SideBar, Header, Footer } from './components'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="wrapper__content">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/create-project' element={<CreateProject />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
