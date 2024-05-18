import Layout from "../components/lauout/Layout";
import useStore from "../hooks/useStore";



function AboutPage() {
    
    
    let [value, setValue] = useStore('name','ilon')
    function test(){
        setValue('ilon')
    }
    return (  
        <>
        <h2>About</h2>
        <button onClick={test}>{value}</button>
        
        </>
    );
}

export default AboutPage;