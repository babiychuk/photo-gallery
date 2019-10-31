import React from 'react';
import './album.css'

class Album extends React.Component { // компонент для создание отдельного альбома

    render() {
        return (

            <div className="album" onClick={() => {this.props.openAlbum()}}>
               <span> {this.props.children}</span>
            </div>


        );
    }
}

export default Album;
