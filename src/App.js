import React from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import fetchData from './services/fetchData';

class App extends React.Component {
  state = {
    imagesData: [],
  }

  componentDidMount() {
    fetchData.get('/photos')
      .then(res => { this.setState({ imagesData: res.data }) })
      .catch(err => console.log(err))
  }

  handleForm = (data) => {
    fetchData.get('/search/photos', { params: { query: data } })
      .then(res => { this.setState({ imagesData: res.data.results }) })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Header onFormSubmit={this.handleForm} />
        <main className="main">
          {this.state.imagesData.map(item => <ImageCard key={item.id} data={item} />)}
        </main>
      </>
    )
  }
}

export default App;
