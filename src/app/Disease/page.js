'use client';

import Nevbar from '../Nevbar';
import Footer from '../Footer';
import Desies from './Desies';
import { useUser } from '../UserContext';
export default function Page() {
    const {check } = useUser() || {}; 
    return (
       <>
           <Nevbar/>
           {check&& ( <Desies />)}
           {check&& ( <Footer/>)}
       </>
      
      
    );
}
