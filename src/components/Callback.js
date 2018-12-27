import React from 'react'
import Auth from '../Auth'

class Callback extends React.Component {
    componentDidMount() {
        const auth = new Auth()
        auth.handleAuth()
    }

    render() {
        return <div>Loading...</div>
    }
}

export default Callback