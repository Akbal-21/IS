import React from 'react'
import {Button} from 'react-bootstrap'

export const LogginScreen = ({history}) => {

    const hadleLogin =() => {
        history.replace('/')
    }

    return (
        <div className="container mt-5">
            <h1>LogginScreen</h1>
            <hr/>
            <Button
                variant="success"
                onClick={hadleLogin}
            >
                Login
            </Button>
        </div>
    )
}
