import React from 'react';
import Draggable from 'react-draggable';
import Text from './ToggleableText';

class DragShape extends React.Component {

state = {
        deltaPosition: {
          x: 0, y: 0
        },
      };



  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  //  console.log(this.props.shape.id, this.state.deltaPosition.x, this.state.deltaPosition.y)
    this.props.updateDragShapePosition(this.props.shape.id, this.state.deltaPosition.x, this.state.deltaPosition.y)
  };



  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    //console.log(shape)
    const shapeClassName = 'box--' + this.props.shape.shape;
    //setup default position
    const position = {
      x: parseInt(this.props.shape.positionx),
      y: parseInt(this.props.shape.positiony)
    }
    return (
      <Draggable
      defaultPosition={position}
      onDrag={this.handleDrag}
      bounds="parent" {...dragHandlers}
      >
            <div className={shapeClassName}>
              <Text
              id={this.props.shape.id}
              name={this.props.shape.name}
              changeShapeTextName = {this.props.changeShapeName}
              />
            </div>
      </Draggable>
    );
  }
}

export default DragShape;
