import { Children } from "react"


interface IModal {
    show:boolean,
    hideModal:Function,
    children:any
}

function ModalWind(props:IModal){

    return (
        <>
            <div className={props.show? "modal is-active" : "modal "}>
                <div onClick={()=>{props.hideModal()}} className="modal-background"></div>
                <div className="modal-content">
                {props.children}
                </div>
                
                <button onClick={()=>{props.hideModal()}} className="modal-close is-large" aria-label="close"></button>
            </div>
        </>
    )
}

export default ModalWind