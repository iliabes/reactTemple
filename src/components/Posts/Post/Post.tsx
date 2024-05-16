import {Card} from '@gravity-ui/uikit';
import s from './Post.module.sass'



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
            <div className={s.post}>
                <Card className={s.card} theme="success" size="l">
                    <h2>{props.name}</h2>
                    <span>{props.userName}e</span>
                </Card>
            </div>
        </>
    );
}

export default Post
