import React from 'react'

export default function Order() {
    return (
        <>
            <div className='order-input'>
                <h1>Order Food to your door</h1>
                <div className="input-fields">
                    <input  placeholder='Enter delivery address' type="text" />
                    <select name="" id="">
                        <option value="">Deliver now</option>
                        <option value="">Schedule for later</option>

                    </select>
                    <button id='findFood'>Find Food </button>
                </div>
                <p className='recent-order'><a href="">Sign In</a> for your recent order</p>
            </div>

        </>
    )
}
