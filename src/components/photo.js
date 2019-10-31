import React from 'react';
import './photo.css'

class Album extends React.Component { // компонент для создание отдельной фотографией и кнопкой

    render() {

        return (
            <div className="photo" >
                <span className='addTag' onClick={() => {this.props.addTagToImg()}}>+</span>{this.props.children}
            </div>
        );
    }
}

export default Album;
