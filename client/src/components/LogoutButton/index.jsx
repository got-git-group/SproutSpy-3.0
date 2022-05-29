import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './index.sass'

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <>
        <div className='wrapKlass'>
          <button onClick={() => logout()}>
            <p className='paraKlass'>
            Log Out
            </p>
          </button>
        </div>
    </>
  )
}

export default LogoutButton;