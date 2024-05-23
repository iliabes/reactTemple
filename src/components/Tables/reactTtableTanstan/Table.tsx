import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingFn,
  SortingState,
  useReactTable,
  getFilteredRowModel
} from '@tanstack/react-table'
import { useAppSelector } from '../../../hooks/redux' 
import { useState } from 'react'





const columns = [
  {
    header:'USERNAME',
    accessorKey: 'username',
  },
  // {
  //   header:'EMAIL',
  //   accessorKey: 'email',
  // },
  // {
  //   header:'WEBSAIT',
  //   accessorKey: 'website',
  // },
  {
    header:'Nick & Email',
    accessorFn: row => `${row.website} ${row.email}`,
  },
  { 
    header:'PHONE',
    accessorKey: 'phone',
  },

  {
    header:'ID',
    accessorKey: 'id',
    sortingFn: 'basic'
  },
  // {
  //   header:'Wirewolf',
  //   accessorKey: 'wirewolf',
  //   cell: (props) => props.getValue() ? <input type="checkbox"  /> : <input type="checkbox" checked />
  // },
  {
    header:'Age',
    accessorKey: 'age',
    cell: (props) => <span>{props.getValue()}</span>,
    sortingFn: 'basic'
  },
]


function ReactTableTanstan() {
  const rerender = React.useReducer(() => ({}), {})[1]
  const data = useAppSelector((state) => state.rootReduser.firebaseReduser.fireUsers)
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')




  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), 
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting:sorting,
      globalFilter: filtering
    },
    onSortingChange: setSorting, 
    onGlobalFilterChange:setFiltering,

  })


  console.log(table.getState().sorting)

  return (
    <>
      <div className="box">
      <input type="text" className='input' onChange={(e)=>{setFiltering(e.target.value)}}/>
     </div> 
      <table className='table is-fullwidth'>
          <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>  
          <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map(row => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>  
      </table>

       <div className='box'>{table.getRowModel().rows.length.toLocaleString()} Rows</div>
       <pre className='pre'>{JSON.stringify(sorting, null, 2)}</pre> *

      </>
  )
}

export default ReactTableTanstan













