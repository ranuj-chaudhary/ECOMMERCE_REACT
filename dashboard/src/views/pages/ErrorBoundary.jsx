import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            Something went wrong.
          </h1>
          <p>{this.state.error?.message || 'Unknown error'}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
