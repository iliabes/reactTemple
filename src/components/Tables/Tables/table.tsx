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
    const isDescent = sorting.order === 'des' &&  sorting.column === value;
    const isAscent = sorting.order === 'asc' &&  sorting.column === value;
    let nextSortingOrder = isAscent ? 'asc' : 'des'
    let currentCol = false
    if(isDescent || isAscent){currentCol = true}

    
    console.log(currentCol)

    

    // if(isDescent && isAscent){
    //     console.log('HeaderCell nextSortingOrder',isAscent)
    // }
    // changhe()

    
    function changhe(){
        console.log(isAscent)
        // setIsAscend(!isAscent)
    }

    function bla(){
        console.log('bla')
    }

    function blo(){
        console.log('blo')
    }


    return(
        <th onClick= {currentCol ? ()=>{fnSort(value,nextSortingOrder);changhe()} : (event)=>{event.preventDefault();}} key={myKey}>
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
    const [data,setData] = useState(useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers))
    let newDate = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)
    const serchData = useState('')
   
    useEffect(()=>{setData(newDate)},[newDate])

    function debounce(func, ms) {
        let timeout;
        return function() {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, arguments), ms);
        };
      }

    function serchDataFn(){
        console.log('sorting')
        if(sorting === ''){
            setData(newDate)
            return 
        }
        let sortDate = [] ;
        data.forEach((user)=>{
            for (let item in user){
                if(String(user[item]).includes(sorting)){
                    sortDate.push(user)
                    break;
                }
            }
        })
        // console.log(newDate);
        setData(sortDate)
    }

    function fnSort(prop,sort){
        //потом передавить проы и директорию соотвестевенно prop,dir=false
        let copyData = [...data]
        console.log('fnSort copydata',copyData,column,sort)
        let newDAte = copyData.sort((a,b)=>{
            if(sort === 'dex'){
                if(Number(a[prop]) < Number(b[prop])){return 1}
            }else{
                if(Number(a[prop]) < Number(b[prop])){return -1}
            }

        }
        )
        setData(newDAte)

       
    }


    return (
        <>
        <div className='box'>
            <input onChange={(e)=>{setSorting(e.target.value)}} type='text'/>
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