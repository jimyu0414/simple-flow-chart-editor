import React from 'react';
import Draggable from 'react-draggable';
 
class DragPanel extends React.Component {

state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
 
eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    console.log(this.state.deltaPosition.x + "  " + this.state.deltaPosition.y )
  };





  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };
 
  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
        
        <div className="drag-panel">
          
            <Draggable onDrag={this.handleDrag} bounds="parent" {...dragHandlers}>
              <div className="box--arrow box--arrow-right">
                <p>arrow right</p>
              </div>
            </Draggable>

            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box--diamond">
               <p>diamond</p>
              </div>
            </Draggable>

            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box--arrow box--arrow-down">
               <p>arrow down</p>
              </div>
            </Draggable>

            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box--arrow box--arrow-up">
               <p>arrow up</p>
              </div>
            </Draggable>

            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box--arrow box--arrow-left">
               <p>arrow left</p>
              </div>
            </Draggable>

            <Draggable bounds="parent" {...dragHandlers}>
              <div className="box--rectangle">
               <p>Rectangle</p>
              </div>
            </Draggable>

        </div>

    );
  }
}
 
export default DragPanel;