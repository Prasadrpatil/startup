import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import AboutScreen from './screens/AboutScreen'
import OurTeamScreen from './screens/OurTeamScreen'
import TestimonialScreen from './screens/TestimonialScreen'
import ServiceScreen from './screens/ServiceScreen'
import PricingScreen from './screens/PricingScreen'
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/contact' component={ContactScreen} />
        <Route path='/pricing' component={PricingScreen} />
        <Route path='/services' component={ServiceScreen} />
        <Route path='/testimonials' component={TestimonialScreen} />
        <Route path='/team' component={OurTeamScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>

      <Footer />
    </Router>
  )
}

export default App
