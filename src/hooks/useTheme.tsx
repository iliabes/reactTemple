import { useEffect, useLayoutEffect, useState } from "react";

function useTheme(){
    // let arr =  ['light', 'dark']  
	let [state, setState] = useState(true)

    function switchTheme(){
        setState(!state)
    }

    useLayoutEffect(()=>{
        if(!state){
            document.documentElement.setAttribute('data-theme','dark')
        }else{
            document.documentElement.setAttribute('data-theme','light')
        }
    },[state])

    return switchTheme
}

export default useTheme