import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
