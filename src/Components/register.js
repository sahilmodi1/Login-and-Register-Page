import React from 'react'
import "./register.css"

function Register() {
    return (
        <>
          <h2>MY HUGO BOSS</h2>
          <div className='Account'>
            <h1 >CREATE ACCOUNT</h1>
            <h4 className='entry'>Register now and start enjoying the benefits of a customer account right away.</h4>
            <h3 className='field'>Please complete all fields marked with an *.</h3>
            <input type="text" placeholder='* Saluation' />
            <br />
            <br />
            <input type="text" placeholder='* First name' />
            <br />
            <br />
         

            <input type="text" placeholder='* Last name' />
            <br />
            <label>DATE OF BIRTH (OPTIONAL)</label>
            <br></br>

            <input type="Date" />
            
            <br>
            </br>
            <input type="number" placeholder='Enter your number'/>

            <input type="Email" placeholder='*Email' />
            <input type="PassWord"  placeholder='PassWord'/>
            <input className='box' type="checkbox" />
            
            <h5>E-Mail Never miss our new products and discounts. Be sure you are up to date on the new lifestyle s.</h5>
            <input className='box' type="checkbox" />
             <h5>PERSONALIZED OFFERS
             Get unique content and recommendations based on your personalized interests .</h5>


<button >Create Account</button>

          </div>
          </>
    )
}

export default Register;