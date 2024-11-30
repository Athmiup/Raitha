'use client';

import Nevbar from '../Nevbar';
import Footer from '../Footer';
import Attribute from './Attribute';
import Apiitems from './Apiitems';

import { useUser } from '../UserContext';
export default function Page() {
    const {check } = useUser() || {}; 
    return (
       <>
           
           {/* {check&& ( <Footer/>)}
           <Footer/> */}
           <div style={{  borderRadius: '50px' }}>
            <Nevbar/>
            
                <Attribute/>
                {check&& ( <Apiitems />)}
            
            {check&& ( <Footer/>)}
          </div>
       </>
      
      
    );
}
