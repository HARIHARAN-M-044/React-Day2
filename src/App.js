import './App.css';
import pic from "../src/Images/HMlogo.jpg";
import pic1 from "../src/Images/3.jpg";
import pic2 from "../src/Images/2.jpg"
import Armors from './pages/Guns';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Testdrive</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h2>HM MOTORS</h2><br/>
    <p>
        one of the World's Largest Automobiles
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                Welcome to the world of Automobiles. 
                </h2><br/>
                <div class="img2">
                    <img src={pic1} alt="" /><img src={pic1} alt="" /><br/><br/>
                    <img src={pic2} alt=""/> <img src={pic2 } alt=""/>
                </div>
                <h6>Here you know about what are the cars available
                and book their slots for Testdrive.<br/>      
                </h6><br/>
          <h6> <i>NOTE : Payment should be done only in the office!</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">BOOK A TESTDRIVE </a>
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
