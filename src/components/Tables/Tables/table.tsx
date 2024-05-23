import { useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'




const column = ['id', 'username', 'website', 'email', 'phone']



function TableHeader({column}) {
    return (
        <>
            <thead>
                <tr>
                    {column.map((elem: any, index: number) => (
                        <th key={index}>{elem.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
        </>
    )
}

function TableBody({ entries, column ,sorting}) {
    return (
        <>
            <tbody>
                {entries.map((elem, index) => (
                    <tr>
                        {column.map((item,indexCol:number)=>(
                            <HeaderCell value={elem[item]} key={indexCol+elem[item]} column={column} sorting={sorting}/>
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

function HeaderCell({column,sorting,key,value}){
    return(
        <th key={key}>{value}</th>
    )
}

function Table() {
    const [sorting,setSorting] = useState({column:'id',order:'asc'})
    const data = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)
    console.log(data);

    return (
        <table className='table is-fullwidth'>
            <TableHeader column={column} />
            <TableBody column={column} entries={data} sorting={sorting}/>
            <TableFooter column={column}/>
        </table>
    )
}

export default Table