import React from 'react'
import './home.css';
// import Navbar from './Navbar';
import Navbar from './Navbar';
 function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
    <a href="#" class="logo">Online Booking</a>
    <nav class="nav-items">
     <button> <a href="#">Home</a></button> 
      <button><a href="FlightSearch">Search</a></button>
     <button><a href="flight">Flights</a></button>
     <button><a href="Booking">BookingForm</a></button>  
     <button> <a href="login">Login</a> </button> 
      <button><a href="login">Signup</a></button>
      <button><a href="about">AboutUs</a></button>
      <button><a href="Contact">Contact</a></button>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>FLIGHT BOOKING</h1>
      <p></p>
      <br></br>
       <button><a href="Flight">RoundTrip</a></button><br></br>
       <button><a href="ExploreFlights">Explore</a></button>
    </div>
    <div class="about-me">
    </div>
    </main>
  
  </div>
)
}

export default Home





// import React from 'react'
// import Navbar from './Navbar'
// import './home.css'
// function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <main>
//         <h1>Hello</h1>
//       </main>
//     </div>
//   )
// }

// export default Home