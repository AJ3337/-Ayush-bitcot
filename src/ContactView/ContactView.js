import { Button, Grid, Paper, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function ContactView() {
  const [fetchdata, setfetchData] = useState([])
  const [first, setfirst] = useState([])
  const [second, setsecond] = useState('')
  useEffect(() => {
    ShowData()
  }, [])

  const ShowData = () => {
    axios
      .get('http://localhost:3030/contact')
      .then((res) => {
        setfetchData(res.data)
        setfirst(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlefilter = (e)=>{
   if(e.target.value == ''){
    setfetchData(first)
   }else{
   const filterresult =  first.filter(item => item.name.toLowerCase().includes(e.target.value) || item.email.toLowerCase().includes(e.target.value) || item.mobno.toLowerCase().includes(e.target.value) )
    setfetchData(filterresult)
   }
   setsecond(e.target.value)
  }

  return (
       <div>
        <Grid container spacing={4} margin={2}>
          <Grid item xs={4} md={4} lg={4}>
          <TextField variant='outlined' value={second} onInput={(e)=>handlefilter(e)} placeholder='Search' fullWidth/>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
         <Link to='/addcontact'><Button variant='contained' sx={{height:53}}>AddContact</Button></Link> 
            </Grid>
        </Grid>
        <Paper elevation={3}>
        <Stack spacing={3}>
      <table style={{margin:3,padding:3,textAlign:'center'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {fetchdata.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobno}</td>
                <Link to={`/viewcontact/${item.id}`}>
                  <td><Button variant='inline' sx={{color:'black'}}><RemoveRedEyeIcon/></Button></td>
                </Link>
                <Link to={`/editcontact/${item.id}`}>
                  <td><Button variant='inline' sx={{color:'black'}}><EditIcon/></Button></td>
                </Link>
                <Link to={`/delete/${item.id}`}>
                  <td><Button variant='inline' sx={{color:'black'}}><DeleteIcon/></Button></td>
                </Link>
              </tr>
            )
          })}
        </tbody>
      </table>
      </Stack>
      </Paper>
      </div>

  )
}
