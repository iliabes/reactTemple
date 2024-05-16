
import { memo } from 'react';


interface IInner{
    storoke:()=> string,
    storoke2:number
}


 function Inner(props:IInner){
    console.log('Inner')


    return (
        <>
            <h3>this is {props.storoke()}</h3>
        </>
    );
}

export default memo(Inner)
