import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions';
import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages();
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=4`)
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images,
                });
            });
    }

    render() {
        const { images } = this.state;
        const { isLoading } = this.props;
        return (
            <section className="grid">
                {isLoading && <div>loading</div>}
                {images.map(image => (
                    <img
                        key={image.id}
                        src={image.urls.small}
                        alt={image.user.username}
                        className={`item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    />
                ))}
            </section>
        );
    }
}

const mapStateToProps = ({ isLoading }) => ({
    isLoading,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
