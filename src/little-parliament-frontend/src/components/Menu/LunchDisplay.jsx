import MenuItem from "./MenuItem"
import axios from 'axios'
import { Grid } from '@mui/material'

const menuItems = [
    { id: 1, name: 'Fish tacos', description: 'Smashed avo on a deliscious Sourdough toast', price: 12, image: 'https://picsum.photos/300' },
    { id: 2, name: 'Bacon and bacon and bacon', description: 'Smashed avo on a deliscious Sourdough toast', price: 13, image: 'https://picsum.photos/301' },
    { id: 3, name: 'Steak', description: 'Smashed avo on a deliscious Sourdough toast', price: 16, image: 'https://picsum.photos/302' },
]
const url = 'https://gentle-fortress-16563.herokuapp.com/foods.json'
axios.get(url)
.then(response => {
    console.log(response.data)
})


export default function LunchDisplay() {
    return (
        <>
        <h1> Lunch </h1>
         <Grid className="display" container justify="center" spacing={4}>
            {menuItems.map((item) => (
                <Grid item justify="center" key={item.id} xd={12} sm={6} md={4} lg={3}>
                    <MenuItem item={item} />
                </Grid>
            ))}
         </Grid>
        </>
    )
}