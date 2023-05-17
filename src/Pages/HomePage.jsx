import React from 'react'
import { useGlobalContext } from '../Context/context';
import EditCard from '../Components/EditCard'
import VendorCard from '../Components/VendorCard'
import AddJob from '../Components/AddJob';

const HomePage = () => {
    const { edit,vendor,addVendor} = useGlobalContext();

  return (
    <>
    
    

    <div className="container flex justify-center items-center mt-20 md:ml-11">
      <div className=" m-auto flex-column md:items-center grid grid-cols-3 gap-20 justify-center">
      
      {vendor.map((person) => {
        return<VendorCard key={person.id} {...person}/>;
      })}
      </div>
      </div>
      
      


        
    
    
    
    </>
  )
}

export default HomePage