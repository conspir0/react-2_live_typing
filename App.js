class App extends React.Component {
  state = {
    text: ''
  }

  inputHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Type here"
            value={this.state.text}
            onChange={this.inputHandler}
          />
          <div
            className="result-container"
          >
            {this.state.text}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
