import "./App.css";

/****** */
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { v4 as uuidv4 } from "uuid";
/******* */

function App() {
  const storeCategories = [
    {
      id: uuidv4(),
      category: "Women",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    {
      id: uuidv4(),
      category: "Mens",
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      id: uuidv4(),
      category: "Hats",
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    },
    {
      id: uuidv4(),
      category: "Jackets",
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    },
    {
      id: uuidv4(),
      category: "Shoes",
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    },
  ];
  return (
    <div className="App">
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </ImageListItem>
        {storeCategories.map((item) => (
          <ImageListItem key={item.id}>
            <img
              // src={`${item.img}?w=248&fit=crop&auto=format`}
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.category}
              // subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default App;
