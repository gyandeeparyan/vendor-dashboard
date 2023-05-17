
import React, { useState, useContext, useEffect } from 'react'


  const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [vendor, setVendor] = useState([])
  const [edit, setEdit] = useState(false)
  const [questions, setQuestions] = useState([])
  
  
  const addVendor = (name,accountNum,bankName) => {
    const fakeId = Date.now();
    const newVendor = { id: fakeId,name:name,accountNum:accountNum,bankName:bankName};
    setVendor([ newVendor,...vendor]);
  };

  const handleEdit=()=>{
   setEdit(!edit)

  }

  const handleDelete=()=>{
   
  }
  const handleModal=()=>{
   
  }

  const handleUpdate=()=>{
  setEdit(!edit)
  }

  

  return (
    <AppContext.Provider
      value={{
      edit,
      vendor,
      addVendor,
      handleDelete,
      handleEdit,
      handleModal,
      handleUpdate,
       
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
