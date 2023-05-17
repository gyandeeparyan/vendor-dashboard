import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useGlobalContext } from '../Context/context';
 function VendorCard({name ,accountNum,bankName}) {
  const { edit,handleEdit,handleModal} = useGlobalContext();



  return (
    <div className="w-[300px] rounded-3xl border-4 border-black">
      
      <div className="p-4">
        <h1 className="inline-flex items-center text-xl font-semibold mb-5">
        Vendor Details <ArrowUpRight className="ml-2 h-4 w-4" />
        </h1>
<fieldset>
<legend
    class="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Name
  </legend>

   <p className="mt-3 font-bold text-xl text-gray-600 mb-5">
          {name} 
    </p>
    <legend
    class="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Account Number
  </legend>

        <p className="mt-3 font-bold text-xl text-gray-600 mb-5">
          {accountNum} 
        </p><legend
    class="text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    Bank Name
  </legend>

        <p className="mt-3 font-bold text-xl text-gray-600 mb-5">
          {bankName} 
        </p>

</fieldset>
       
        
        <button
          type="button"
          onClick={handleEdit}
          className="mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          EDIT
        </button>
        <button
          type="button"
          onClick={handleModal}
          className="mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          DELETE
        </button>
      </div>
    </div>
  )
}

export  default VendorCard;