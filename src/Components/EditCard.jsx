import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useGlobalContext } from "../Context/context";
 function EditCard() {
    const {handleUpdate,handleDelete} = useGlobalContext();


  return (
    <div className='w-[300px] rounded-3xl border-4 border-black'>
      <div className='p-4'>
        <h1 className='inline-flex items-center text-xl font-semibold mb-5'>
          Vendor Details <ArrowUpRight className='ml-2 h-4 w-4' />
        </h1>
        <fieldset>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Name
          </legend>

          <input
            className='flex mt-3 mb-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
            type='text'
            placeholder='Enter your name'
            id='name'
            required
          ></input>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Account Number
          </legend>

          <input
            className='flex mt-3 mb-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
            type='number'
            placeholder='Enter your name'
            id='name'
            required
          ></input>
          <legend
            class='text-m font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            for='name'
          >
            Bank Name
          </legend>

          <input
        className="flex mt-3 mb-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Enter your name"
        id="name"
        required
      ></input>
        </fieldset>

        <button
        onClick={handleUpdate}
          type='button'
          className='mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          SAVE
        </button>
        <button
          type='button'
          className='mt-4 w-full rounded-full bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default EditCard