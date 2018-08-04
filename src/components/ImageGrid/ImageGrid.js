import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { loadImages } from '../../actions';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { isLoading, images, loadImages } = this.props;
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
                <Button onClick={loadImages} loading={isLoading}>
                    Load More
                </Button>
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
