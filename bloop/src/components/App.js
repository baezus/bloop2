import React from 'react'
import Footer from 'features/filters/Footer'
import AddProfile from 'features/profiles/AddProfile'
import VisibleProfileList from 'features/profiles/VisibleProfileList'

const App = () => (
  <div>
    <AddProfile />
    <VisibleProfileList />
    <Footer />
  </div>
);

export default App;
