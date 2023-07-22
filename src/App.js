import './App.css';
// import Navbar from './Components/NavBar/Nav';
import Navbar from './Components/geneCode/CodeNav';
function App() {
  return (
    <div>
      <Navbar />
      <div style={{
        margin : '30px 0px 0px 280px'
      }}>
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
