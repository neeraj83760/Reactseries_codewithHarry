// import logo from './logo.svg';s
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// let name = 'Neeraj'

function App() {
  return (
<>
<Navbar title ="TextUtils" about = "AboutUtils"/>
<div className="container my-3">
<TextForm heading = " Enter the Text to Analyse "/>
{/* <About />  */}
</div>

</>  
  );
}

export default App;
