import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'




const column = ['id', 'username', 'website', 'email', 'phone','age']


function TableHeader({column,sorting,fnSort}) {
    return (
        <>
            <thead>
                <tr>
                    {column.map((elem: any, index: number) => {
                        
                       return  <HeaderCell fnSort={fnSort} value={elem} key={index} myKey={index} column={column} sorting={sorting}/>
                    
                    })}
                </tr>
            </thead>
        </>
    )
}

function HeaderCell({column,sorting,myKey,value,fnSort}){
    let [sortingOrder,setSortingOrder] = useState(sorting.order)
    let isCurrent = false
    if(sorting.column === value){
        isCurrent = true
    }
    const isDescent = sortingOrder === 'des' &&  isCurrent
    const isAscent = sortingOrder === 'asc' &&  isCurrent
    



    
    
    function changhe(){
        if(sortingOrder === 'des'){
            setSortingOrder('asc')
        }else{
            setSortingOrder('des')
        }
    }




    return(
        <th onClick= {isCurrent ? ()=>{fnSort(value,sortingOrder);changhe()} : (event)=>{event.preventDefault();}} key={myKey}>
            {value}
            {isAscent && <span>▲</span>}
            {isDescent && <span>👇🏻</span>}
            </th>

        

    )
}

function TableBody({ entries, column ,}) {
    return (
        <>
            <tbody>
                {entries.map((elem, index) => (
                    <tr key={index}>
                        {column.map((item,indexCol:number)=>(
                            <td key={indexCol}>{elem[item]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </>
    )
}
 

function TableFooter({column}) {
    return (
        <>
            <tfoot>
                <tr>
                    {column.map((elem, index:nymber) => (
                        <th  key={index}>{elem.toUpperCase()}</th>
                    ))}
                </tr>
            </tfoot>
        </>
    )
}




//------------------main
function Table() {
    const [sorting,setSorting] = useState({column:'age',order:'asc'})
    const [serchData,setSerchData] = useState('')
    const [data,setData] = useState(useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers))
    let newDate = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)

   
    useEffect(()=>{setData(newDate)},[])
    // useEffect(()=>{setData(serchData)},[serchData])

    function debounce(func, ms) {
        let timeout;
        return function() {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, arguments), ms);
        };
    }


    function serchDataFn(serchData){
        console.log('sorting',serchData)
        if(sorting === ''){
            setData(newDate)
            return 
        }

        let sortDate = [] ;
        newDate.forEach((user)=>{
            for (let item in user){
                if(String(user[item]).includes(serchData)){
                    sortDate.push(user)
                    break;
                }
            }
        })
        console.log(sortDate);
        setData(sortDate)
    }

    function fnSort(prop,sort){
        //потом передавить проы и директорию соотвестевенно prop,dir=false
        let copyData = [...data]
        console.log('fnSort copydata',copyData,column,sort)
        let newDAte = copyData.sort((a,b)=>{
            if(sort === 'des'){
                console.log('des')
                if(Number(a[prop]) < Number(b[prop])){return -1}
                if(Number(a[prop]) > Number(b[prop])){return 1}
            }else{
                console.log('asc')
                if(Number(a[prop]) < Number(b[prop])){return 1}
                if(Number(a[prop]) > Number(b[prop])){return -1}
            }

        }
        )
        setData(newDAte)

       
    }


    return (
        <>
        <div className='box'>
            {/* <input onChange={(e)=>{setSerchData(e.target.value)}} type='text'/> */}
            <input onChange={(e)=>{debounce(serchDataFn(e.target.value),10000)}} type='text'/>
            <button onClick={()=>{serchDataFn()}} className='button'>Search</button>
        </div>

        <table className='table is-fullwidth'>
            <TableHeader column={column} sorting={sorting} fnSort={fnSort}/>
            <TableBody column={column} entries={data} />
            <TableFooter column={column}/>
        </table>
        </>
    )
}

export default Table