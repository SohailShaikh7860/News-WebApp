import Navbar from './components/Navbar.jsx';
import News from './page/News.jsx';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      <Category />
      <main className="flex-1">
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
