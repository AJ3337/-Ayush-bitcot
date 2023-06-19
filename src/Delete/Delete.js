import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { Button, Card, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Delete() {
    const { id } = useParams()
    const nav = useNavigate()

    useEffect(() => {
        handleSubmit()
    }, [])
  

    const handleSubmit = async () => {
        await axios
            .delete("http://localhost:3030/contact/" + id)
            .then((res) => {
               console.log(res,'datadeleted')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
      <Card>
         <Grid container spacing={1}>
         <Grid item xs={12} md={12} lg={12} >
          <b>Contact Is Deleted</b> 
         </Grid>
         <Grid item xs={12} md={12} lg={12} >
         <b>Go To Contact Page Please Click on -</b>  <Link to={'/contactview'}><Button variant='contained'>Back</Button></Link>
           </Grid>
           </Grid>
      </Card>
    )
}

