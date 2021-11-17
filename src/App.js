import React from 'react';
import Header from './components/Header';
import axios from 'axios';

class App extends React.Component {
  state = {
    formValue: "",
    imagesList: []
  }
  handleForm = (data) => {
    this.setState({ formValue: data })
  }
  componentDidMount() {
    axios({
      method: 'get',
      baseURL: 'https://api.unsplash.com/photos',
      headers: {
        Authorization: 'Client-ID YPoo9no8tT6YquPzkE8NEb4wZXMutHioEOTOLKatOOA'
      },
    }).then(res => console.log(res))
  }
  render() {
    return (
      <>
        <Header onFormSubmit={this.handleForm} />
      </>
    )
  }
}

export default App;
