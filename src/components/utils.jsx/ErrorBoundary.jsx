import React, {Component} from "react"

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if(this.state.hasError) {
            return <h1> Something went wrong </h1>
        }

        return this.props.children
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)

    }
}

export default ErrorBoundary;