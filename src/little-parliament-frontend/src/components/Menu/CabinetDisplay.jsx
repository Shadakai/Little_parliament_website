import MenuItem from "./MenuItem"
import Grid from './@mui/material/grid'

const menuItems = [
    { id: 1, name: 'Avocado on toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Bacon and eggs', description: 'Smashed avo on a deliscious Sourdough toast', price: 13, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Corn Fritters', description: 'Smashed avo on a deliscious Sourdough toast', price: 16, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Eggs Benedictcumberbatch', description: 'Smashed avo on a deliscious Sourdough toast', price: 18, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Avocado on more toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12.5, image: 'https://picsum.photos/200' },
    { id: 6, name: 'Breakkie wrap', description: 'Smashed avo on a deliscious Sourdough toast', price: 8, image: 'https://picsum.photos/200' },
    { id: 1, name: 'Avocado on toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Bacon and eggs', description: 'Smashed avo on a deliscious Sourdough toast', price: 13, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Corn Fritters', description: 'Smashed avo on a deliscious Sourdough toast', price: 16, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Eggs Benedictcumberbatch', description: 'Smashed avo on a deliscious Sourdough toast', price: 18, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Avocado on more toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12.5, image: 'https://picsum.photos/200' },
    { id: 6, name: 'Breakkie wrap', description: 'Smashed avo on a deliscious Sourdough toast', price: 8, image: 'https://picsum.photos/200' },
    { id: 1, name: 'Avocado on toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Bacon and eggs', description: 'Smashed avo on a deliscious Sourdough toast', price: 13, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Corn Fritters', description: 'Smashed avo on a deliscious Sourdough toast', price: 16, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Eggs Benedictcumberbatch', description: 'Smashed avo on a deliscious Sourdough toast', price: 18, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Avocado on more toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12.5, image: 'https://picsum.photos/200' },
    { id: 6, name: 'Breakkie wrap', description: 'Smashed avo on a deliscious Sourdough toast', price: 8, image: 'https://picsum.photos/200' },
    { id: 1, name: 'Avocado on toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Bacon and eggs', description: 'Smashed avo on a deliscious Sourdough toast', price: 13, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Corn Fritters', description: 'Smashed avo on a deliscious Sourdough toast', price: 16, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Eggs Benedictcumberbatch', description: 'Smashed avo on a deliscious Sourdough toast', price: 18, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Avocado on more toast', description: 'Smashed avo on a deliscious Sourdough toast', price: 12.5, image: 'https://picsum.photos/200' },
    { id: 6, name: 'Breakkie wrap', description: 'Smashed avo on a deliscious Sourdough toast', price: 8, image: 'https://picsum.photos/200' },
]

export default function CabinetDisplay() {
    return (
        <>
        <h1> Cabinet </h1>
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