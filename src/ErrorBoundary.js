import { Component } from "react";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        return this.state.hasError ? (
            <p>An Error occured in a template</p>
        ) : (
            this.props.children
        );
    }
}
