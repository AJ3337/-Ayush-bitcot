
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogContent, DialogTitle, Grid } from '@mui/material'


export default function ContactView() {
  const [fetchdata, setfetchData] = useState([])
  const [open] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    ShowData()
  }, [])

  const ShowData = () => {
    axios
      .get('http://localhost:3030/contact/' +id)
      .then(res => {
        console.log(res,"viewdata")
        setfetchData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Dialog
    open={open}
  >
    <DialogTitle>
      VIEW CONTECT
    </DialogTitle>
    <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} >
             <b>Name</b> -- {fetchdata.name}
          </Grid>
          <Grid item xs={12} md={12} lg={12} >
             <b>Email</b> -- {fetchdata.email}
          </Grid>
          <Grid item xs={12} md={12} lg={12} >
          <b>Contact </b> -- {fetchdata.mobno}
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
           <Link to={'/contactview'}> <Button variant='contained' fullWidth>Back</Button></Link>
          </Grid>
        </Grid>
    </DialogContent>
  </Dialog>
  )
}
