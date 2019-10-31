import React from 'react';
import Photo from './photo';
import {Link} from "react-router-dom";

class Photos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {  // задаю состояние компонента
            photoAlbum: [],
            photoAlbumState: [],
            isLoaded: false,
        };
        this.addTagToImg = this.addTagToImg.bind(this);
    }

    componentDidMount() { // метод ЖЦ после отрисовки всех компонентов

        let locationPath = parseInt(this.props.location.pathname.slice(7));
        let album = [];

        fetch("https://jsonplaceholder.typicode.com/photos") // метод для извлечения данных
            .then(res => res.json())
            .then(json => {

                json.map((el, key) => {  // методом .map() прохожу все елементы и по номеру альбома создаю отмельный масив с фотографиями данного альбома
                    if (json[key].albumId === locationPath) {
                        album[key] = el;
                    }
                });

                this.setState({ //метод для изменение состояния компонента
                    photoAlbum: album, // записываем загруженные данные в состояние компонента
                    photoAlbumState: album, // записываем загруженные данные в состояние компонента
                    isLoaded: true,  // меняем значение, после того как данные подгрузились
                });
            });
    };

    addTagToImg = (photoId) => { // функция добавления тега для фотографии
        console.log(photoId);
    };

    searchImgByName = (event) => { // функция поиска по названию (ищется по title) фотографии

        let searchInput = event.target.value.toLowerCase();
        let displayImg = this.state.photoAlbumState.filter((el)=>{
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchInput) !== -1;
        });

        this.setState({
            photoAlbum: displayImg
        });
        console.log(displayImg);

    };

    render() {
        let {isLoaded} = this.state; // запись в переменную из состояним
        if (!isLoaded){ // условия при котором на странице нечего не будет, пока данные не загружатся
            return <div className='loading'> Loading photos</div>;
        } else {

            return(
                <div>
                    <Link to='/gallery' className='return'>←Return to Gallery</Link>
                    <div className="search-block">
                        <span>Search img by name</span>
                        <input type='text' className='search-field' onChange={this.searchImgByName}/>
                    </div>
                    <div>
                    {

                        Object.keys(this.state.photoAlbum).map((el,key) => { // методом .map() прохожу все фотографии в альбоме и создаю их через компонент
                                return (
                                    <Photo // создание отдельной фотографии и передача компоненту параметров
                                        key={this.state.photoAlbum[el].id}
                                        photo={this.state.photoAlbum[el].id}
                                        addTagToImg={this.addTagToImg.bind(null, this.state.photoAlbum[el].id)}
                                    >
                                        <img
                                            src={this.state.photoAlbum[el].thumbnailUrl}
                                            title={this.state.photoAlbum[el].title}
                                            alt={this.state.photoAlbum[el].title}/>
                                    </Photo>
                                );
                        }, this)
                    }
                    </div>
                </div>

            );
        }
    }
}

export default Photos;
