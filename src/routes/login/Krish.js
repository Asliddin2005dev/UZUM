import React from 'react'
import { Link } from 'react-router-dom'
import './Krish.css'

function Krish() {
    return (
        <div className='Krish' >
            <div className="box">
                <h1>Tizimga Krish</h1>

                <p>Foydalanuvchi nomi</p>
                <input type="text" placeholder='Foydalanivchi nomi' />


                <p>Parol</p>
                <input type="password" placeholder='Parolni kriting' />

                <button>Krish</button>

                <Link className='Link' to={'/'}  >Asosiy Sahifaga qaytish</Link>
            </div>
        </div>
    )
}

export default Krish