import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { auth,provider } from '../Firebase';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../Reducer'
const Login = () => {

    const [{},dispatch] = useStateValue()
    const signIn = () => { 
          auth.signInWithPopup(provider)
          .then((result) =>{
          dispatch({
              type : actionTypes.SET_USER,
              user : result.user
          })})
          .catch((e)=> alert(e))
    }

    return (
        <div className='Login'>
            <div className='Login__container'>
            <div className="Login__containerLeft">
                <p><strong>To use WhatsApp on your computer:</strong><br />
                    1. Open WhatsApp on your phone <br />
                    2. Tap Menu or Settings and select WhatsApp Web<br />
                    3. Point your phone to this screen to capture the code<br />
                    <small>Need help to get started?</small>
                </p>
            </div>
            <div className="Login__containerRight">
                <div>
                    <Button onClick={signIn}>
                    Click here Sign in to  WhatsApp<WhatsAppIcon /> 
                    </Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login
