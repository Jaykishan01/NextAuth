import '@/styles/globals.css'
import Navbar from './componenets/Navbar'

export default function App({ Component, pageProps }) {
  
  
  
  return <>

    <Navbar></Navbar>
     <Component {...pageProps} />
   
  </>
  

 


 
}
