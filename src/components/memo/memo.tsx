// import { fetchUsers } from '../../store/actionCreators';
// import { selectCount } from '../../store/redusers/CounterSlice';
// import Inner from './innerComponent/inner';

import { useState, useEffect } from 'react';
import { useAppDispatch,useAppSelector } from '../../hooks/redux';
import { increment } from '../../store/redusers/CounterSlice';
import { fetchUsers } from '../../store/actionCreators';


export default function Memo() {
    let getValue = useAppSelector(state => state.rootReduser.counterSlice.value)
    const {users, isLoading, error} = useAppSelector(state => state.rootReduser.usersSlice)
    let [number,setNumber] = useState(1)
    let [value,setValue] = useState(getValue)
    
  

    
    const dispatch = useAppDispatch()


    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])




    return (
        <>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <h2>{value}</h2>
        {isLoading && <h1>идет загрузка</h1>}
        {error && <h1>{error}</h1>}
        <pre>{JSON.stringify(users,null,2)}</pre>
        </>
    );
}

