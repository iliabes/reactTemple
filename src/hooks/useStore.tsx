import {useState} from 'react'

function useStore(initVal,name){
	let [value, setValue] = useState(getValue)

	function getValue(){
		const storage = localStorege.getItem(name)

		if(storage){
			return JSON.parse()
		}
		return initVal
	}
	
	useEffect(()=>{
		localStorege.setItem(key,JSON.stringify(value))
	})


	return [value , setValue]
}