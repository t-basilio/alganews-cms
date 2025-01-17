import { Component } from "react";
import ErrorDisplay from "./ErrorDisplay";
import { transparentize } from "polished";

interface Props {
    component?: string
    children: React.ReactNode
}

interface State {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
        hasError: true,
          error: {
          message: error.message
        }   
    };
  }

  public render () {
    if (this.state.hasError) {
        return (
          <div
            style={{
              padding: 24,
              border: "1px solid " + transparentize("0.9", "#274060"),
            }}
          >
            <ErrorDisplay
              title={`Erro ao renderizar ${this.props.component || 'componente'}`}
              message={this.state.error?.message}
            />
          </div>
        );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
