import React, {Component} from 'react';

class ImagesList extends Component {
    render() {
        return(
            <img src={this.props.data.urls.small} alt="" />
        )
    }
}

export default ImagesList;