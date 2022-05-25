import React from 'react'
import styles from './style.module.css'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import counter from '../../redux/reducers/counter'

export default function Login() {
    const dispatch = useDispatch()
    const counterState = useSelector((state) => state.counter)

    const updateCounterNumber = (num) => {
        dispatch({ type: 'UPDATE_COUNTER', payload: num })
    }

    return (
        <GoogleOAuthProvider clientId="291423735175-l0r0le01kot49993g09shcfv2o4rbo46.apps.googleusercontent.com">
            <div className={styles.container}>
                <div>
                    <div
                        onClick={() =>
                            updateCounterNumber(counterState.number + 1)
                        }
                        className={styles.pointer}
                    >
                        tambah
                    </div>
                    <div>{counterState.number}</div>
                    <div
                        onClick={() =>
                            updateCounterNumber(counterState.number - 1)
                        }
                        className={styles.pointer}
                    >
                        kurang
                    </div>
                </div>
                <CustomLoginGoogle />
            </div>
        </GoogleOAuthProvider>
    )
}

const CustomLoginGoogle = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) =>
            getUserByGglToken(tokenResponse.access_token),
    })

    const getUserByGglToken = async (access_token) => {
        const options = { headers: { Authorization: `Bearer ${access_token}` } }

        try {
            const response = await axios.get(
                'https://www.googleapis.com/oauth2/v2/userinfo',
                options
            )
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.button} onClick={login}>
            Login Google
        </div>
    )
}