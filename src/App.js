import React from 'react'
import { Route, Routes } from 'react-router'
import AddContact from './AddContact/AddContact'
import ContactView from './ContactView/ContactView'
import EditContact from './EditContact/EditContact'
import Delete from './Delete/Delete'
import ViewContact from './ViewContact/ViewContact'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/addcontact' element={<AddContact/>}/>
        <Route path='/contactview' element={<ContactView/>}/>
        <Route path='/viewcontact/:id' element={<ViewContact/>}/>
        <Route path='/editcontact/:id' element={<EditContact/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
    </div>
  )
}
