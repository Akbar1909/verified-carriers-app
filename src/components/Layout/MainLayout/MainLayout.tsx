import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Container from '@/components/Container'

interface MainLayoutProps{
    children:any
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <div>
         
             <Header/>
        
            <div>
                 {children}
            </div>
  
       <Footer/>
  
    </div>
  )
}

export default MainLayout