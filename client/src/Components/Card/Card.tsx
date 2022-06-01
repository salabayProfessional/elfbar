import * as React from "react";
import MaterialCard from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ELFBAR_IMAGE from "./elfbar__image.png"
import "./Card.scss";
import { Button, Typography } from "@mui/material";

const Elfbar = [
  {
    name: "elfbar mix",
    traction: 1500,
    price: 350,
    taste: "watermelon",
    madeIn: "China",
    inStock: true,
  },
  {
    name: "elfbar mix",
    traction: 1400,
    price: 340,
    taste: "watermelon",
    madeIn: "China",
    inStock: false,
  },
  {
    name: "elfbar mix",
    traction: 1300,
    price: 330,
    taste: "watermelon",
    madeIn: "China",
    inStock: true,
  }
]

const Card: React.FC = () => {
  return (
    <MaterialCard sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Elfbar 1500 with watermelon"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={ELFBAR_IMAGE}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing={false}>
       <Button variant="outlined">BUY</Button>
       <Button variant="outlined" startIcon={<ShoppingBasketIcon />}>ADD</Button>
      </CardActions>
    </MaterialCard>
  );
};

export default Card;