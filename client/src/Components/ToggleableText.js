import React from 'react';
class ToggleableText extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditMode: false,
      text: ''
    }
  }

  componentDidMount(){
    this.setState(
      {
        text: this.props.name
      }
    );
  }

  changeToEditMode = () =>{
    this.setState(
      {
        isEditMode: true
      }
    );
  }


  handleTextChange = (event) =>{
      this.setState(
        {
        text: event.target.value
        }
    );
    }

  submitText = () =>{
    this.setState(
      {
      isEditMode: false
      }
  );
    this.props.changeShapeTextName(this.state.text,this.props.id)
  }

  render(){

      if(this.state.isEditMode){
        return(
          <div>
          <input
          type="text"
          defaultValue={this.state.text}
          onChange={this.handleTextChange}
          //to stop the input to move with its shape
          onMouseDown={e => e.stopPropagation()}
           />
           <button onClick={this.submitText}>Submit</button>
           </div>
        )
      }else {
          return(
            <p onDoubleClick={this.changeToEditMode}
            >{this.state.text}</p>
          )
      }

  }
}
export default ToggleableText;
