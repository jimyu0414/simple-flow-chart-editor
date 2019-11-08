import React, {Component} from 'react';
import Shape from './Shape';

class MenuPanel extends Component {


    render(){
        return(
            <div className="app__menu">

             <Shape shape='arrow-up' addShape={this.props.addShape}/>
             <Shape shape='arrow-down' addShape={this.props.addShape}/>
             <Shape shape='arrow-left' addShape={this.props.addShape}/>
             <Shape shape='arrow-right' addShape={this.props.addShape}/>
             <Shape shape='oval' addShape={this.props.addShape}/>
             <Shape shape='diamond' addShape={this.props.addShape}/>

            </div>
        );
    }
    
}

export default MenuPanel