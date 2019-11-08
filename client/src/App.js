import React from 'react';
import './App.scss';
import DragPanel from './Components/DragPanel';
import MenuPanel from './Components/MenuPanel';

class App extends React.Component {
constructor(){
  super();
  this.globalShapes=[];
  this.state={
    shapes:[]
  }
 //this.handleLoadingChart = this.handleLoadingChart.bind(this);
}


  //load from json file
  handleLoadingChart= () => {
    // fetch('/api/shapes')
    //   .then(res => res.json())
    //   .then(shapes => this.setState({shapes},()=>console.log(shapes)));
    //   this.globalShape = this.state.shapes;
    fetch('/api/shapes')
      .then(res => res.json())
      .then(shapes => this.setState({shapes},()=>console.log(shapes)));

  }

  //add new shape to drag pannel
  handleMenuShapeClick = (shape) =>{
    const uuidv1 = require('uuid/v1');
    let newShape = {
      id: uuidv1(),
      shape: shape,
      name:"defult",
      positionx:"0",
      positiony:"0"
    }
    this.globalShapes.concat(newShape);
    console.log(this.globalShapes);
    this.setState({
      shapes: this.state.shapes.concat(newShape)
    })

  }

  //export to json file
  handleJsonExport = () => {

  const res =  fetch('/api/exportshapes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.shapes)
  });

  console.log(res);
  }


  //handleShapeNameChange
  handleShapeNameChange = (newName, id) =>{
    console.log('name change');
    let shapes = this.state.shapes;
    shapes.forEach(function(shape) {
      if (shape.id === id) {
        shape.name = newName;
      }
    });
    this.setState({
        shapes: shapes
    });
    console.log(this.state.shapes)
  }

  //update pictular shape position
  handleDragShapePosition = (id,x,y) =>{
console.log('now moving:' + id);

      let shapes = this.state.shapes;
      shapes.forEach(function(shape) {
        if (shape.id === id) {
          shape.positionx = x;
          shape.positiony = y;
        }
      });
      this.setState({
          shapes: shapes
      });
      console.log(this.state.shapes)
  }


  render(){
    return(
      <div className="app">
    <div className="app__header">
    <h1>Simple Flow Chart Editor</h1>
    <p>( Click to add a shape from left menu )</p>
    <button className="btn__get-chart" onClick={this.handleLoadingChart}>LAST EXPORTED JSON CHART</button>
    <button onClick={this.handleJsonExport}>EXPORT JSON</button>
    </div>
      <MenuPanel
        addShape = {this.handleMenuShapeClick}
      />
      <DragPanel
        shapes = {this.state.shapes}
        updateDragShapePosition = {this.handleDragShapePosition}
        changeShapeName = {this.handleShapeNameChange}
      />
    </div>
    )
  }
}

export default App;
