import { Component } from "react";

class ErrorBoundry extends Component {
  // create component for a page
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops. That is not good.</h1>; // return this is any errors are true
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
