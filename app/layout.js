import {Roboto} from 'next/font/google'
import Navigation from '../components/Navigation';
import './globals.css';

const robot = Roboto({
  subsets:['latin'],
  weight:['400' , '700']
})

export default function RootLayout({children}){
   return (
    <html lang="en">
      <body className={robot.className}>

     <Navigation/>
      <h1> This is layout page</h1>
        {children}
      
      </body>
    </html>
  );
}
 
 

