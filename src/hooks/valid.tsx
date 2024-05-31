function useValid(data:string,validParam:string){
	let re
	switch(validParam){
		case 'name':
			re = /^[a-zA-Z][a-zA-Z0-9-]+$/;
			console.log('user name',re.test(String(data).toLowerCase()));
			return re.test(String(data).toLowerCase());
			break;
		case 'email':
			re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			console.log('email',re.test(String(data).toLowerCase()));
			return re.test(String(data).toLowerCase());
			break;
		case 'password':
			re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;
			console.log('password',re.test(String(data)));
			return re.test(String(data));
			break;
	}
}

export default useValid