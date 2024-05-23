import { useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'




const column = ['id', 'username', 'website', 'email', 'phone']



function TableHeader({column,sorting}) {
    return (
        <>
            <thead>
                <tr>
                    {column.map((elem: any, index: number) => (
                        <HeaderCell value={elem} key={index} column={column} sorting={sorting}/>
                    ))}
                </tr>
            </thead>
        </>
    )
}

function HeaderCell({column,sorting,key,value}){
    const isDescent = sorting.order === 'des' &&  sorting.column === value;
    const isAscent = sorting.order === 'asc' &&  sorting.column === value;
    const nextSortingOrder = isDescent ? 'asc' : 'des'
    console.log(' HeaderCell column',value)



    function sortData(){
        console.log(sorting)
    }
    return(
        <th onClick={()=>{sortData()}} key={key}>
            {value}
            {isAscent && <span>▲</span>}
            {isDescent && <span>👇🏻</span>}
            </th>
        // {isDescent && ''<span>'🎈'</span> }
        

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



function Table() {
    const [sorting,setSorting] = useState({column:'id',order:'asc'})
    const data = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)
    console.log(data);

    return (
        <table className='table is-fullwidth'>
            <TableHeader column={column} sorting={sorting}/>
            <TableBody column={column} entries={data} />
            <TableFooter column={column}/>
        </table>
    )
}

export default Table