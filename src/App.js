import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  state = {
    formValue: ""
  }
  handleForm = (data) => {
    this.setState({ formValue: data })
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
