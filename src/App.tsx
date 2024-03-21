import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <div className="container">
        <Cards src={'https://i.ibb.co/qFV7CfT/react-svgrepo-com.png'}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Cards>
        <Cards src={'https://i.ibb.co/qFV7CfT/react-svgrepo-com.png'}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </Cards>
    </div>
 
   
  )
}

export default App
