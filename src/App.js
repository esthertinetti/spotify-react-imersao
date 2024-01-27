import './App.css'
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  return (
    <div className='spotify'>
      <Sidebar />
      <main className='main-container'>
        <Header />
        <Main />
      </main>

      <Footer />
    </div>
  );
}

export default App;
