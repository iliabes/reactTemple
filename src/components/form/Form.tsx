import { useState,useEffect } from 'react';

function myForm(){
 const [userName , setUserName] = useState('userName')
 const [durtUserName , setDurtUserName] = useState(false)
 const [validUserName , setValidUserName] = useState(false)

 const [mail , setMail] = useState('mail')
 const [durtMail , setdurtMail] = useState(false)
 const [valiMail , setValidMail] = useState(true)


 const [password , setPassword] = useState('password')
 const [durtPassword , setDurtPassword] = useState(false)
 const [validPassword , setValidPassword] = useState(true)

 const [btnActive , setBtnActive] = useState(false)





function fnValidUserName(userName:string):boolean{
	const  re = /^[a-zA-Z][a-zA-Z0-9-]+$/;
	return re.test(String(userName).toLowerCase());
}


function fnValidEmail(email:string):boolean{
	const  re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return re.test(String(email).toLowerCase());
}

function fnValidPassword(password:string):boolean{
	const  re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
	return re.test(String(password));
 }


useEffect(()=>{
	if(fnValidEmail(mail)){
		setValidMail(true)
	}else{
		setValidMail(false)
	}
},[mail])

useEffect(()=>{
	if(fnValidUserName(userName) && (userName.length > 3 && userName.length < 8) ){
		setValidUserName(true)
	}else{
		setValidUserName(false)
	}
},[userName])

useEffect(()=>{
	if(fnValidPassword(password) && (userName.length > 3 && userName.length < 8) ){
		setValidPassword(true)
	}else{
		setValidPassword(false)
	}
},[password])



useEffect(()=>{
	console.log(validUserName)
	if(valiMail && validUserName && validPassword){
		console.log('btn active')
		setBtnActive(true)
	}else{
		setBtnActive(false)
	}
},[valiMail,validUserName,validPassword])

	return (	
	<div className="field">
		<div className="control">
			{(durtMail && !valiMail) && <p className=' is-5 mt-2'>error</p>}
			<input onBlur={()=>{setdurtMail(true)}}  onChange={(e)=>{setMail(e.target.value)}} className="input is-success mt-2" type="text" placeholder="mail" value={mail} />
		    {(durtUserName && !validUserName) && <p className=' is-5 mt-2'>error</p>}
		 	<input  onBlur={()=>{setDurtUserName(true)}} onChange={(e)=>{setUserName(e.target.value)}} className="input is-success mt-2" type="text" placeholder="userName" value={userName}/>
			{(durtPassword && !validPassword)  && <p className=' is-5 mt-2'>error</p>}
			<input onBlur={()=>{setDurtPassword(true)}}  onChange={(e)=>{setPassword(e.target.value)}} className="input is-success mt-2" type="text" placeholder="password" value={password} />
			<button disabled={!btnActive} className="button is-primary mt-4 ">Submit</button>
		</div>
		<div className='mt-2'>
			<p className="title is-3">Имя: <span className="title is-4">{userName}</span> </p>
			<p className="title is-3">Фамилия: <span className="title is-4">{mail}</span></p>
		</div>
	</div>
	)
}

export default myForm