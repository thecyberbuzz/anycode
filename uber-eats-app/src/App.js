import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Order from './component/Order';
import features from './features';
import MainFeatures from './MainFeatures';
import Citiesnear from './component/Citiesnear';
import Countries from './component/Countries';
import Section from './Section';
import Footer from './Footer';
import Hamburger from './component/Hamburger';

function createEntry(description){
  return(
    <MainFeatures
    key={description.id}
    img={description.img}
    heading={description.heading}
    link={description.link}
    />
  )
}

function App() {
  return (
    <>

    <Navbar />
{/* <Hamburger /> */}
    <Order />
   <div className='main-features'>
    {features.map(createEntry)}
   </div>
   <Citiesnear />
   <Countries />
   <hr />
   <Section />
   <hr />
   <Footer />
    </>
  );
}

export default App;
