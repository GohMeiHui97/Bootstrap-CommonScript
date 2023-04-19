import React from "react";

export default function grid(props) {
  const container = props.container;
  const item = props.item;
  const gridSize = props.gridSize;
  const classes = props.className;
  const gridRSize = props.gridRSize;
  const gss = props.gss;
  const gls = props.gls;
  console.log(props.children);
  console.log(container);
  if (gridRSize) {
    return (
      //<div  className={"col-" + gridSize}>{props.children}</div>
      <div  className={"col-sm-"+gss+" col-md-"+gridRSize+" col-lg-"+gls}>{props.children}</div>
      //  <Grid container rowSpacing={2} columnSpacing={2} className={classes} sx={styles}>{props.children}</Grid>
    );
  } else if (gridSize) {
    return (
      <div  className={"col-" + gridSize}>{props.children}</div>
      //  <Grid item xs={gridSize} className={classes} sx={styles}>{props.children}</Grid>
    );
  }
}
