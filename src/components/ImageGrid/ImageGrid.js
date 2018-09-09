import React, { Component, unstable_Profiler as Profiler } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import Stats from '../Stats';
import { loadImages } from '../../actions';
import './styles.css';

class ImageGrid extends Component {
    logProfiler = (
        profilerId,
        phase,
        actualTime,
        baseTime,
        startTime,
        commitTime,
    ) => {
        console.log({
            profilerId,
            phase, // identify the phase of rendering or why the render was caused
            actualTime, // time taken by react
            baseTime, // time taken by react
            startTime, // timestamp at which render started
            commitTime, // timestamp at which render was committed to the renderer
        });
    };

    render() {
        const { isLoading, images, loadImages, error, imageStats } = this.props;
        return (
            <Profiler id="image-grid" onRender={this.logProfiler}>
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
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                    </section>
                    {error && (
                        <div className="error">{JSON.stringify(error)}</div>
                    )}
                    <Button
                        onClick={() => !isLoading && loadImages()}
                        loading={isLoading}
                    >
                        Load More
                    </Button>
                </div>
            </Profiler>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
