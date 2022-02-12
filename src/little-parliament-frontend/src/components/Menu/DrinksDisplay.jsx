import MenuItem from "./MenuItem"
import Grid from './@mui/material/grid'

const menuItems = [
    { id: 1, name: 'Flat White', description: 'Smashed avo on a deliscious Sourdough toast', price: 5, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Latter', description: 'Smashed avo on a deliscious Sourdough toast', price: 5, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Cappuchino', description: 'Smashed avo on a deliscious Sourdough toast', price: 5, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Long Black', description: 'Smashed avo on a deliscious Sourdough toast', price: 4, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Espresso', description: 'Smashed avo on a deliscious Sourdough toast', price: 3, image: 'https://picsum.photos/200' },
    { id: 6, name: 'Doppio', description: 'Smashed avo on a deliscious Sourdough toast', price: 6, image: 'https://picsum.photos/200' },
    { id: 7, name: 'Iced Latte', description: 'Smashed avo on a deliscious Sourdough toast', price: 5.5, image: 'https://picsum.photos/200' },
    { id: 8, name: 'Iced Long black', description: 'Smashed avo on a deliscious Sourdough toast', price: 5, image: 'https://picsum.photos/200' },
    { id: 9, name: 'Iced Chocolate', description: 'Smashed avo on a deliscious Sourdough toast', price: 7, image: 'https://picsum.photos/200' },
    { id: 10, name: 'Hot Chocolate', description: 'Smashed avo on a deliscious Sourdough toast', price: 4, image: 'https://picsum.photos/200' },
]

export default function DrinkDisplay() {
    return (
        <>
        <h1> Drinks </h1>
         <Grid className="display" container justify="center" spacing={4}>
            {menuItems.map((item) => (
                <Grid item key={item.id} xd={12} sm={6} md={4} lg={3}>
                    <MenuItem item={item} />
                </Grid>
            ))}
         </Grid>
        </>
    )
}