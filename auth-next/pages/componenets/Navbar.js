import styles from "@/styles/Home.module.css";
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
     <div className={styles.new}>
              <ul>
               
                <Link href='/about'><li>About</li></Link>
                <Link href='/'><li>Home</li></Link>
               <Link href='/next'> <li>Next</li></Link>    
              </ul>
            </div>
    
    
    </>
  )
}

export default Navbar