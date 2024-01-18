import React from 'react'
import "./login.css"


function login() {
    return (
        <>
          
          <h1 className='myaccount'>MY ACCOUNT</h1>
          <div className="row">
            <div className="col">
                <h2>LOGIN</h2>
                
                  
        <form>
            
            <h4>Please enter your e-mail address and password.

           </h4>
            <input type="text" placeholder='* E-mail address' />
            <br />
            <br />
         

            <input type="Password" placeholder='* Password' />
            <br/>
            <input className='checkbox' type="checkbox" />
                <h5>Remember me</h5>
                
            <br/>
            
            <button className='Login'>LOGIN</button>
            <br />
            <span>Forgot Your Password?</span>
            
        </form>
            </div>
            <div className="col-create">
                <h1>Create  An Account</h1>
                <h3>
                Create an account to enjoy all the benefits of our registered customers.
                </h3>
                <h3><i class="fa-regular fa-heart"></i>Save your favourites across devices </h3>
                <h3>Save time at checkout for future orders</h3>
                <h3>Manage your purchases and returns in your order history</h3>
                <h3>Become a HUGO BOSS EXPERIENCE member to profit from special offers</h3>
                <a href='/Register'><button className='registerbutton'>REGISTER NOW</button></a>
                
                <span>I registered in a store and want to activate my account</span>
            </div>
          </div>
        </>
    )
}

export default login;