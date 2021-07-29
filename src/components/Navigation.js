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
            <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
          </div>
        );
      }
      