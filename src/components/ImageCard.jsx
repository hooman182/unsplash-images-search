import React, { Component } from 'react';

class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHeight: null
        }
        this.currentImage = React.createRef();
    }
    componentDidMount() {
        this.currentImage.current.addEventListener('load', this.getImageHeight)
    }
    getImageHeight = () => {
        const height = this.currentImage.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({ imageHeight: span });
    }
    render() {
        const { urls, alt_description } = this.props.data;
        return (
            <a
                href={urls.full}
                style={{ gridRowEnd: `span ${this.state.imageHeight}` }}
                target="_blank"
            >
                <img
                    src={urls.regular}
                    alt={alt_description}
                    ref={this.currentImage}
                />
            </a>
        )
    }
}

export default ImagesList;