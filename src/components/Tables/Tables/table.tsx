import { useState } from 'react'
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
    const nextSortingOrder = isDescent ? 'asc' : 'des'
   






    return(
        <th onClick={()=>{fnSort()}} key={myKey}>
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
                    <tr>
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
    const [sorting,setSorting] = useState({column:'id',order:'asc'})
    const data = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)
    const serchData = useState('')

    console.log('data',data)

    function serchDataFn(){
        console.log(data)
        let newDate ;
        data.forEach((user)=>{
            console.log(typeof user)
            for (let item in user){
                console.log(user[item],String(user[item]).includes('user'))
            }
        })
    }

    function fnSort(prop,dir=false){
        //потом передавить проы и директорию соотвестевенно
        console.log(data)
        let newDAte = data.sort((a,b)=>{
            console.log(a)
            }
        )

        console.log(newData)
       
    }


    return (
        <>
        <div className='box'>
            <input type='text'/>
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