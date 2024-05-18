import { useEffect , useState} from "react"

function useStore(name:string , initVal:string ){
	let [value, setValue] = useState(getValue)

	function getValue(){
		const storage = localStorage.getItem(name)

		if(storage){
			return JSON.parse(storage)
		}
		return initVal
	}
	
	useEffect(()=>{
		localStorage.setItem(name,JSON.stringify(value))
	}, [value])


	return [value , setValue]
}

export default useStore