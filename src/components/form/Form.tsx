import { useState,useEffect } from 'react';

function myForm(){
 const [name , setName] = useState('name')
 const [durtName , setDurtName] = useState(false)
 const [validName , setValidName] = useState(false)

 const [surname , setSurname] = useState('surname')
 const [durtSurname , setfurtSurname] = useState(false)
 const [validSurName , setValidSurName] = useState(true)

 const [btnActive , setBtnActive] = useState(true)


 function validField(stroke,setValue){
 	if(stroke.length > 5){
 		console.log('valid')
 		setValidName(true)
 	}else{
 		console.log('not valid')
 		setValidName(false)
 	}
 }


useEffect(()=>{
	validField(name,setValidName)
},[name])

 useEffect(()=>{
 	console.log(validName)
 	if(validSurName && validName){
 		console.log('btn active')
 		setBtnActive(false)
 	}else{
 		setBtnActive(true)
 	}

 },[validSurName,validName])

	return (	
	<div className="field">
		<div className="control">
		    {(durtName && !validName) && <p className=' is-5 mt-2'>error</p>}
		 	<input  onBlur={()=>{setDurtName(true)}} onChange={(e)=>{setName(e.target.value)}} className="input is-success mt-2" type="text" placeholder="Name" value={name}/>
		 	{durtSurname && <p className=' is-5 mt-2'>error</p>}
			<input onBlur={()=>{setfurtSurname(true)}}  onChange={(e)=>{setSurname(e.target.value)}} className="input is-success mt-2" type="text" placeholder="Surname" value={surname} />
			<button disabled={btnActive} className="button is-primary mt-4 ">Submit</button>
		</div>
		<div className='mt-2'>
			<p className="title is-3">Имя: <span className="title is-4">{name}</span> </p>
			<p className="title is-3">Фамилия: <span className="title is-4">{surname}</span></p>
		</div>
	</div>
	)
}

export default myForm