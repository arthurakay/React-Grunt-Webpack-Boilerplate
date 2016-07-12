import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

Foo.propTypes = {
    title: React.PropTypes.string.isRequired
};

ReactDOM.render(
    <Foo title="Hello, World!" />,
    document.getElementById('hello-world')
);