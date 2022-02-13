import MenuItem from "./MenuItem"
import axios from 'axios'
import { useState, useEffect} from 'react'
import { Grid } from '@mui/material'

export default function BreakfastDisplay() {
    // Axios grabbing data from the backend and populating the menu items
    const url = 'https://gentle-fortress-16563.herokuapp.com/foods.json'
    const [items, setItem] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setItem(response.data)
        })  
    }, [url])
    return (
        <>
         <h1 id="breakfast"> Breakfast </h1>
         <Grid className="display" container justify="center" spacing={4}>
            {items.map((item) => (
                <Grid item key={item.id} xd={12} sm={6} md={4} lg={3}>
                    <MenuItem item={item} />
                </Grid>
            ))}
         </Grid>
        </>
    )
}