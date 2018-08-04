import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { loadImages } from '../../actions';
import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=3`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });
    }

    render() {
        const { isLoading, images } = this.props;
        return (
            <div className="content">
                <section className="grid">
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
                <Button loading={isLoading}>Load More</Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images }) => ({
    isLoading,
    images,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
