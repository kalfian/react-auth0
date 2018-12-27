import React from 'react'

class Main extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Helo ! {this.props.name} <br />
                    Wanna see secret area? <a href="/secret">Click area</a>
                </p>
                <div>
                    Login dulu cuy <br />
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default Main;