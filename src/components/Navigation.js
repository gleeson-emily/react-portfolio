import React, { useState } from 'react'
import Portfolio from './Portfolio'
import Home from './Home'
import About from './About'
import Tabs from './Tabs'
import Contact from './Contact'


//component with body of my portfolio site
//this will conditionally render everything based on which tab is clicked



export default function Navigation() {
        const [currentPage, setCurrentPage] = useState('Home');
      
        // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
        const renderPage = () => {
          if (currentPage === 'Home') {
            return <Home />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          return <Contact />;
        };
      
        const handlePageChange = (page) => setCurrentPage(page);
      
        return (
          <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
          </div>
        );
      }
      