import React, { useState } from 'react'
import axios from 'axios'
import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
export default function EditContact() {
    const [fetchdata, setfetchData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobno, setMobNo] = useState('')
    const [open] = useState(true)
    const nav = useNavigate()

    const {id} = useParams()
    
    const handleSubmit = async ()=>{
      await  axios
        .put("http://localhost:3030/contact/" + id,{
          name,
          email,
          mobno
        })
        .then((res)=>{
            setfetchData(res.data)
              nav('/contactview')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  
  return (
    <div>
      <Dialog
      open={open}
    >
      <DialogTitle>
        EDIT CONTECT
      </DialogTitle>
      <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12} >
            <TextField variant="outlined" placeholder='name' label='name' type='text' value={name} onChange={(e)=>setName(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
            <TextField variant="outlined" placeholder='email' label='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={12} md={12} lg={12} >
            <TextField variant="outlined" placeholder='mobile' label='mobile' type='number' value={mobno} onChange={(e)=>setMobNo(e.target.value)} fullWidth/>
            </Grid>
            <Grid item xs={6} md={6} lg={6} >
            <Button variant='contained' onClick={()=>handleSubmit()} fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Link to={'/contactview'}> <Button variant='contained' fullWidth>Back</Button></Link>
            </Grid>
          </Grid>
      </DialogContent>
    </Dialog>  
    </div>
  )
}

