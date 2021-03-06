import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import AboutScreen from './screens/AboutScreen'
import OurTeamScreen from './screens/OurTeamScreen'
import TestimonialScreen from './screens/TestimonialScreen'
import ServiceScreen from './screens/ServiceScreen'
import ContactScreen from './screens/ContactScreen'
import ProfileScreen from './screens/ProfileScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import AllMembersScreen from './screens/AllMembersScreen'
import AllMentorsScreen from './screens/AllMentorsScreen'
import MemberProfileScreen from './screens/MemberProfileScreen'
import MentorProfileScreen from './screens/MentorProfileScreen'
import AddStartupScreen from './screens/AddStartupScreen'
import StartupScreen from './screens/StartupScreen'
import EditStartupScreen from './screens/EditStartupScreen'
import RequestScreen from './screens/RequestScreen'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Switch>
          <Route path='/startup/:startupId' component={StartupScreen} />
          <Route path='/editstartup/:startupId' component={EditStartupScreen} />
          <Route path='/requests' component={RequestScreen} />
          <Route path='/addstartup' component={AddStartupScreen} />
          <Route path='/mentor/:mentorId' component={MentorProfileScreen} />
          <Route path='/member/:memberId' component={MemberProfileScreen} />
          <Route
            path='/allmentors/search/:keyword'
            component={AllMentorsScreen}
          />
          <Route path='/allmentors' component={AllMentorsScreen} exact />
          <Route
            path='/allmembers/search/:keyword'
            component={AllMembersScreen}
          />
          <Route path='/allmembers' component={AllMembersScreen} exact />
          <Route path='/editprofile' component={EditProfileScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/services' component={ServiceScreen} />
          <Route path='/testimonials' component={TestimonialScreen} />
          <Route path='/team' component={OurTeamScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/signin' component={SignInScreen} />
          <Route path='/signup' component={SignUpScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
    </Router>
  )
}

export default App

// geyab99660@wedbo.net abc@1234
