import { doc,  setDoc, getDocs } from "firebase/firestore";
import { useEffect,  useState } from "react";
import { users, docSnap } from "../store/firebase";
import { fetchFireUsers, addFireUsers } from "../store/redusers/firebaseReduser";
import { useAppDispatch,useAppSelector } from "../hooks/redux";
import Table from "../components/Tables/Tables/table";



function FirebasePage() {
    let [username , setUsername] = useState('')
    let [email , setEmail] = useState('')
    let [websait , setWebsait] = useState('')
    let [phone , setPhone] = useState('')
    let fireUsers = useAppSelector(state => state.rootReduser.firebaseReduser.fireUsers)
    const dispatch = useAppDispatch()

    

    useEffect(()=>{
        dispatch(fetchFireUsers())
    },[])
    

    
    

   async function getData(){
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach((doc) => {
          console.log(doc);
          console.log(doc.id, " => ", doc.data());
        });
    }

    
    function getDataDorm(){
        event.preventDefault();
        const testUser = {
            email: email,
            id:777,
            phone: Number(phone),
            username: username,
            website: websait
        }
        return testUser
    }

    const fireUsersCard = fireUsers.map((item)=>(
        <div className="card" key={item.id}>
            <div className="media-content">
            <p className="card-header-title title is-4">{item.username}</p>
            </div>
            <div className="content mt-3">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
            id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
            consectetur purus sit amet fermentum.
            </div>
            <p className="card-footer subtitle is-6 mt-2">{item.website}</p>
        </div>
    ))

    return (
        <>
            <section className="section ">
                <h2 className="title">Firebase</h2>
                <form  className="form">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input onChange={(e)=>{setUsername(e.target.value)}} className="input" type="text" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">email</label>
                        <div className="control">
                            <input onChange={(e)=>{setEmail(e.target.value)}} className="input" type="text" placeholder="email"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Phone</label>
                        <div className="control">
                            <input onChange={(e)=>{setPhone(e.target.value)}} className="input" type="text" placeholder="Phone"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">website</label>
                        <div className="control">
                            <input onChange={(e)=>{setWebsait(e.target.value)}} className="input" type="text" placeholder="website"/>
                        </div>
                    </div>

                    
                    
                    <button onClick={()=>{dispatch(addFireUsers(getDataDorm()))}} className="button  has-background-link">addUsers</button>
                </form>
                <div className="box mt-2">
                    <button onClick={()=>{console.log(fireUsers)}} className="button  has-background-link">console.log</button>
                    
                </div>
                <div className="box">
                    <Table/>
                </div>
            </section>
        </>
    )
}

export default FirebasePage;