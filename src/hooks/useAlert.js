import React, { useState } from 'react'

const useAlert = () => {
    const [alert,setAlert] = useState({text:'',type:'danger', show:false})

    const showAlert = ({text,type='danger'})=>{
        setAlert({text,type,show:true})
    }

    const hideAlert = ()=>{
        setAlert({
            text:'',
            type:'danger',
            show:false
        })
    }
  return {alert,showAlert,hideAlert}
}

export default useAlert
