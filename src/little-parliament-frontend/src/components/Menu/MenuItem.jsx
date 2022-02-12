import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';

export default function MenuItem( {item} ) {
    return (
        <div className="item">
        <Card >
            <CardMedia className="item-image" image={item.image} title={item.name} />
         <CardContent>
            <div>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    ${item.price}
                </Typography>
             </div>
             <Typography dangerouslySetInnerHTML={{ __html: item.description}} variant="body2" color="textSecondary" component="p" />
      </CardContent>
    </Card>
    </div>
  );
};
