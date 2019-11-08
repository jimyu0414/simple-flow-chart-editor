import React from 'react';
import Draggable from 'react-draggable';
import Text from './ToggleableText';
 import DragShape from './DragShape';

class DragPanel extends React.Component {

// state = {
//         deltaPosition: {
//           x: 0, y: 0
//         },
//       };
//
//   handleDrag = (e, ui) => {
//     console.log('shape moved');
//     const {x, y} = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//   };
//
//
//   savePosition = (id) => {
//     console.log(id);
//   this.props.handleShapePosition(id,this.state.deltaPosition.x, this.state.deltaPosition.y)
//   }



  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    const draggableShapes = this.props.shapes.map( shape=>{


      return(
        <DragShape
        key={shape.id}
        shape={shape}
        updateDragShapePosition={this.props.updateDragShapePosition}
        changeShapeName={this.props.changeShapeName}
        />
      )
    })
    return (

        <div className="app__drag-panel">
        {draggableShapes}
        </div>

    );
  }
}

export default DragPanel;
