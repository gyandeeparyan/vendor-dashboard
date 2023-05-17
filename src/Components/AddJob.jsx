import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useGlobalContext } from "../Context/context";


function AddJob({}) {
const {addVendor}=useGlobalContext()

    const [name, setName] = useState('');
    const [accountNum, setAccountNum] = useState('');
    const [bankName, setBankName] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
    //   if (!name) {
    //     alert('Please Provide Name Value');
    //     return;
    //   }
      addVendor(name,accountNum,bankName);
      setName('');
      setAccountNum('');
      setBankName('');
    };











  return (
    <div className='w-[300px] rounded-3xl border-4 border-black'>
      <div className='p-4'>
        <h1 className='inline-flex items-center text-xl font-semibold mb-5'>
          Vendor Details <ArrowUpRight className='ml-2 h-4 w-4' />
        </h1>
      <form action=""  onSubmit={handleSubmit}>
      <fieldset>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Name
          </legend>

          <input
            className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
            type='text'
            placeholder='Enter your name'
            id='name'
            
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Account Number
          </legend>

          <input
            className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
            type='number'
            placeholder='Enter your name'
            value={accountNum}
            onChange={(e) => setAccountNum(e.target.value)}
            required
          ></input>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Bank Name
          </legend>

          <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Enter your name"
        id="bankName"
        value={bankName}
        onChange={(e) => setBankName(e.target.value)}
        required
      ></input>
        </fieldset>

        <button
          type='submit'
          
          className='mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          ADD
        </button>
        <button
          type='button'
          className='mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          DELETE
        </button>
      </form>

        
      </div>
    </div>
  );
}

export default AddJob