import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";

export default function ColorPalette() {
  const [rowColor, setRowColor] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        //console.log(data);
        //store data
        setRowColor(data);
      });
  }, []);
  
   //pre-render
  let rows = rowData.map((row, index) => (
    //ind key to have a unique identifier
    <TaskRow key={index} rowData={row} rowNum={index} />
  ));
  return (
    <Container>
      <Grid container>{rows}</Grid>
      <AddTask />
    </Container>
  );
}
