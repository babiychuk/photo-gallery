import React from 'react';
import Album from './album';

class Gallery extends React.Component {


    constructor(props) {
        super(props);

        this.state = { // задаю состояние компонента
            gallery: [],
            isLoaded: false,
        };

        this.openAlbum = this.openAlbum.bind(this);
    }

    componentDidMount() { // метод ЖЦ после отрисовки всех компонентов
        fetch("https://jsonplaceholder.typicode.com/photos") // метод для извлечения данных
            .then(res => res.json())
            .then(json => {
                this.setState({ //метод для изменение состояния компонента
                    gallery: json,  // записываем загруженные данные в состояние компонента
                    isLoaded: true, // меняем значение, после того как данные подгрузились
                })
            })
    }

    openAlbum = (albumId) => { // функция для перехода на страницу альбома
       this.props.history.push('/album/'+ albumId, this.state.data);
    }


    render() {
        let {isLoaded} = this.state; // запись в переменную из состояним
        const {gallery} = this.state; // запись в переменную из состояним
        let albumsNumber = 1;        // создание переменной для первого альбома

        if (!isLoaded){ // условия при котором на странице нечего не будет, пока данные не загружатся
            return <div className='loading'> Loading gallery </div>;
        } else {

            return(
                <div>
                        {
                            Object.keys(gallery).map((keyName, key) =>  { // методом .map() прохожу массим получанных данных
                                if (gallery[key].albumId === albumsNumber){ // условия при котором создается только один альбом
                                    albumsNumber++;
                                    return (
                                        <Album // создание альбома и передача компоненту параметров
                                            albumId = {gallery[key].albumId}
                                            key = {gallery[key].albumId}
                                            albums = {gallery}
                                            openAlbum={this.openAlbum.bind(null, gallery[key].albumId)}
                                        >Album number {gallery[key].albumId}</Album>
                                    );
                                }
                            }, this)
                        }

                </div>

            );
        }
    }
}

export default Gallery;
