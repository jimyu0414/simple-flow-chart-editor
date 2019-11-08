import React from 'react';


class Shape extends React.Component{

   
    handleShapeClick=()=>{
        this.props.addShape(this.props.shape)
    }
    
    render(){
        const menuShapeClass = 'menu__shape menu__shape--'+this.props.shape;
        const getSvg = '#shape__' + this.props.shape
        return(
            <svg onClick={this.handleShapeClick} className={menuShapeClass}>
             <use xlinkHref={getSvg}/>
            </svg>
        )
    }
}
export default Shape