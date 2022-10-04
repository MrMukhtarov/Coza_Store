import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div id="wrapper">
  <div class="form-layout">
    <div class="form-left">
      <div class="logo">Coza Store</div>
      <div class="info">Login</div>
    </div>
    <form action="#" class="form-right">
      <div>
        <input type="text" name="username" id="username" placeholder="Username" autocomplete="off" />
      </div>
      <div>
        <input type="email" name="email" id="email" placeholder="Email" autocomplete="off" />
      </div>
      <div>
        <input type="password" name="password" id="password" placeholder="Password" autocomplete="off" />
      </div>
      <div>
        <input type="password" name="repeatpassword" id="repeatpassword" placeholder="Repeat password" autocomplete="off" />
      </div>
      <div class="buttons">
        <a class="create-account" href="/">Login</a>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login