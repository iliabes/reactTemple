import { useState,useEffect } from 'react';
import useInput from '../../hooks/useInput';








function myForm(){
 const userNameInput = useInput('data name','name')
 const emailInput = useInput('data email','email')
 const passwordInput = useInput('data password ','password')
 const [btnActive , setBtnActive] = useState(false)



	useEffect(()=>{
		if(userNameInput.valid && emailInput.valid && passwordInput.valid){
			console.log('btn active')
			setBtnActive(true)
		}else{
			setBtnActive(false)
		}
	},[userNameInput.valid,emailInput.valid,passwordInput.valid])

	return (	
	<div className="field">
		<div className="control">
			{(emailInput.durtInput && !emailInput.valid) && <p className=' is-5 mt-2'>error</p>}
			<input onBlur={()=>{emailInput.onBlur()}}  onChange={(e)=>{emailInput.onChange(e.target.value)}} className="input is-success mt-2" type="text" placeholder="mail" value={emailInput.inputName} />
		    {(userNameInput.durtInput && !userNameInput.valid) && <p className=' is-5 mt-2'>error</p>}
		 	<input  onBlur={()=>{userNameInput.onBlur()}} onChange={(e)=>{userNameInput.onChange(e.target.value)}} className="input is-success mt-2" type="text" placeholder="userName" value={userNameInput.inputName}/>
			{(passwordInput.durtInput && !passwordInput.valid)  && <p className=' is-5 mt-2'>error</p>}
			<input onBlur={()=>{passwordInput.onBlur()}}  onChange={(e)=>{passwordInput.onChange(e.target.value)}} className="input is-success mt-2" type="text" placeholder="password" value={passwordInput.inputName} />
			<button disabled={!btnActive} className="button is-primary mt-4 ">Submit</button>
		</div>
	</div>
	)
}

export default myForm

