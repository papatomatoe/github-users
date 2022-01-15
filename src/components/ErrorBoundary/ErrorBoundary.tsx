import * as React from "react";

interface Props {
  children: React.ReactNode;
  Fallback?: React.FC<{ error: Error }>;
}

interface State {
  error: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }
  render() {
    const { children, Fallback } = this.props;
    const { error } = this.state;

    if (error)
      return Fallback ? (
        <Fallback error={error} />
      ) : (
        <div style={{ color: "red" }}>
          <pre>
            <h2>{error.message}</h2>
          </pre>
          <pre>{error.stack}</pre>
        </div>
      );

    return children;
  }
}

export default ErrorBoundary;
