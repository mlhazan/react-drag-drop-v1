import React, { Component, PropTypes } from 'react';
import {DropTarget, DragSource} from 'react-dnd';

//snackSpec must have a beginDrag which may not return anything but 
//required to track the name props 
const snackSpec = {
    beginDrag(props){
        return{
            name:props.name
        }
    },
    //endDrag not required but used to track elements dropped or not
    endDrag(props, monitor){
        const dragItem = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if(dropResult){
            console.log(`You Dropped  ${dragItem.name} into ${dropResult.name}`)
        }
    }
};
//required
let collect = (connect,monitor)=>{
    return{
        connectDragSource:connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


class Snack extends Component{
    render(){
        const {name, isDragging, connectDragSource} =this.props;
        const opacity=isDragging?0.4 :1;
        const style={
            opacity:opacity
        }
        return ( connectDragSource(
            <div className="snack" style={style}>
                {name}
            </div>
        )
        )
    }
}
// Snack.propTypes={
//     name: PropTypes.string.isRequired
// }
export default DragSource('snack',snackSpec,collect)(Snack);