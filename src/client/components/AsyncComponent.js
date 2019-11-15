import React from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
        isPresent: false
      };
    }

    async setComponent() {
      const { default: Component } = await importComponent();

      this.setState({
        Component,
        isPresent: true
      });
    }

    render() {
      const { Component } = this.state;
      if (!Component) {
        this.setComponent();
      }

      return Component ? <Component {...this.props} /> : <div>Loading</div>;
    }
  }

  return AsyncComponent;
}
