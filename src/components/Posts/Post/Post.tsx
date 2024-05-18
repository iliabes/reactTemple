import s from './Post.module.sass'
import { Link } from "react-router-dom";


interface IPost{
    name:string,
    userName:string
}

const style = {
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


 function Post(props:IPost){
    return (
        <>
                <div className='card ' size="l">
                    <div className="card-header">
                        <h2 className="title is-4">{props.name}</h2>
                    </div>
                    <div className="card-content">
                        <span className="subtitle is-6">{props.userName}e</span>
                    </div>
                    <div>
                    <Link  className="button is-info"  to={`post/${props.userName}`}>Link</Link>
                    </div>
                </div>
        </>
    );
}

export default Post
