import React from 'react'

class Master extends React.Component {
    render() {
        return (
            <div>
                <p>Helo This is Secret Page!</p>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}

export default Master;