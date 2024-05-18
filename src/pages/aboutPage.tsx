import Layout from "../components/lauout/Layout";
import useStore from "../hooks/useStore";
import {useState} from 'react' 
import 'bulma/css/bulma.min.css';


function AboutPage() {
    let arr1 = [true,true,true,true,false,true,true]
    let arr2 = [false,false,false,false,false,true,false]
    
    let [value, setValue] = useState('value')
    let [value2, setValue2] = useState('value')
    function test(){
        let data = arr1.every((elem)=>( elem === true))
        console.log(data)
        setValue('value: ' +data)
    }
        function test2(){
        let data = arr1.some((elem)=>( elem === true))
        setValue2('value: ' +data)
    }
    return (  
        <>
        <section className="section">
        <h2 className="title">About</h2>
        <div className="grid">
         <div className="box ">
         <h1 className="title ">[true,true,true,true,false,true,true]</h1>
         <h2 className="subtitle">{value}</h2>
         <button className="button" onClick={test}>{'click'}</button>
         </div>
         <div className='box'>
         <h1 className="title">[false,false,false,false,false,true,false]</h1>
         <h2 className="subtitle">{value2}</h2>
         <button className="button" onClick={test2}>{'click'}</button>
         </div>
        </div>
        </section>
        </>
    );
}

export default AboutPage;