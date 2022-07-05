import * as React from 'react'
import {Link} from 'gatsby'
import Navbar from '../components/navbar'

const Layout = ({ pageTitle, children}) => {
  return(
    <div>
      <title>{pageTitle}</title>
      <Navbar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout