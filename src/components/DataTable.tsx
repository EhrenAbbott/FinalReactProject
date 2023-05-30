// in GridColDef, the header name for "Case Triggered" was changed to "Case". Does this need to be changed in other places?

import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hide: true },
  { field: 'word', headerName: 'Word', flex: .75 },
  { field: 'meaning', headerName: 'Meaning', flex: 1.5},
  { field: 'part_of_speech', headerName: 'P.o.S.', flex: .5},
  { field: 'gender', headerName: 'Gender', flex: .5},
  { field: 'plural', headerName: 'Plural', flex: 1},
  { field: 'present_tense', headerName: 'Present Tense', flex: 1},
  { field: 'past_tense', headerName: 'Past Tense', flex: .75},
  { field: 'past_part', headerName: 'Past Participle', flex: 1},
  { field: 'perfect_aux', headerName: 'Perfect Tense Aux. Verb', flex: 1},
  { field: 'preposition', headerName: 'Preposition', flex: .75},
  { field: 'case_triggered', headerName: 'Case', flex: .75}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { wordData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
  } 

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-gray-300 m-3 text-orange-500 rounded hover:bg-gray-800 hover:text-orange-400'
                    onClick={() => handleOpen()}
                >
                    Add New Word
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 bg-gray-300 m-3 text-orange-500 rounded hover:bg-gray-800 hover:text-orange-400" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-gray-300 m-3 text-orange-500 rounded hover:bg-gray-800 hover:text-orange-400" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 400, width: '100%' }}
          >
            <h2 className="p-3 bg-gray-300 m-3 text-orange-500 my-1 rounded">My Vocab Words</h2>
            <DataGrid rows={wordData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
