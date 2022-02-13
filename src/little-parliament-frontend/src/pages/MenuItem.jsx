import React from 'react';
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@mui/material';

export default function MenuItem() {
  const { id } = useParams()
  const url = 'https://gentle-fortress-16563.herokuapp.com/foods/' + id + '.json'
    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setItem(response.data)
        })  
    }, [url])
  return (
      <> 
        <Grid item justify="center" key={item.id} xd={12} sm={12} md={12} lg={12}>
          <Card className="itemDetail">
            <h1 clasName="itemTitle">
                {item.title}
            </h1>
            <CardMedia className="itemImage" image={item.image} title={item.title} />
            <CardContent>
                <div>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${item.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: item.description}} variant="body2" color="textSecondary" component="p" />
          </CardContent>
          </Card>
        </Grid>
      </>
  )
}