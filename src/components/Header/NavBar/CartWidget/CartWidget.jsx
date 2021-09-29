import React from 'react'

const CartWidget = (props) => {
    return (
        <div className='CartWidget'>
            <i class="fas fa-shopping-cart"></i>{props.cart}
        </div>
    )
}

export default CartWidget
