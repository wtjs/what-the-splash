import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../features/imagesSlice';
import { incrementPage } from '../../features/pageSlice';
import './styles.css';

const ImageGrid = props => {
    const {
        isLoading,
        images,
        loadImages,
        incrementPage,
        error,
        imageStats,
    } = props;

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <Stats stats={imageStats[image.id]} />
                        <img src={image.urls.small} alt={image.user.username} />
                    </div>
                ))}
            </section>
            {error && <div className="error">{JSON.stringify(error)}</div>}
            <Button
                onClick={() => !isLoading && incrementPage()}
                loading={isLoading}
            >
                Load More
            </Button>
        </div>
    );
};

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    incrementPage: () => dispatch(incrementPage()),
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
