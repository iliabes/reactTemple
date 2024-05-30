import Layout from "../components/lauout/Layout";
import Form from "../components/form/Form"
import useStore from "../hooks/useStore";
import {useState} from 'react' 
import 'bulma/css/bulma.min.css';
import './bla.css'


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
        <section className="section bgAnim">
        <h2 className="title">Form</h2>
        <Form/>
        </section>
        </>
    );
}

export default AboutPage;