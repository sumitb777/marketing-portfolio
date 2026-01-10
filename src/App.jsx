import { Routes ,Route} from 'react-router-dom'
import Homepage from './components/Homepage'
function App() {

  return (
    <>
    <section className=''>
 <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
    </section>
   
  
    </>
  )
}

export default App
