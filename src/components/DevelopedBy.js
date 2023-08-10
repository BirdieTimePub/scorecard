import React from "react"
import { Navbar } from "react-bootstrap"

const DevelopedBy = () => {
    return (
          <Navbar.Text>
          <a 
            id='developed-by'
            href="http://jifwalker.com" 
            target='_blank'
            rel='noopener noreferrer'
            alt="Link to developer page">
              Developed By: James Walker
          </a>
          </Navbar.Text>
    )
}

export default DevelopedBy