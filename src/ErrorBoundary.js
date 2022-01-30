import { Component } from "react";

export default class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        return this.state.hasError ? (
            <div>
                <h3>Sorry there was a problem loading this page</h3>
            </div>
        ) : (
            this.props.children
        );
    }
}
