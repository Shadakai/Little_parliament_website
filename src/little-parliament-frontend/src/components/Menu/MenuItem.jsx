import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { Link } from "react-router-dom"

export default function MenuItem( {item} ) {
    // Dynamically populate a menuite card, and have it link to the menu/:id page
    const link = "/menu/" + item.id
    return (
        <Link to={{ pathname:  link }} state={{item}} >
        <div className="item">
        <Card >
            <CardMedia className="item-image" image={item.image} title={item.title} />
         <CardContent>
            <div>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    ${item.price}
                </Typography>
                <hr className="solid" />
             </div>
             <Typography dangerouslySetInnerHTML={{ __html: item.description}} variant="body2" color="textSecondary" component="p" />
      </CardContent>
    </Card>
    </div>
    </Link>
  );
};
