
import React from "react";
import PropTypes from "prop-types";

import CartItem from "../containers/CartItem";

export default function CartList(props) { 
    let {items} = props;

    console.log("CartList function render")

   return (
       <div> 
       <h2>Cart List</h2>
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Qty</th>
                   <th> Total </th>
                   <th> Remove</th>
               </tr>
           </thead>
           <tbody>
           {/* comment */}
           
           {
               items.map (item => (
                   <CartItem item={item}
                             key={item.id}

                   />
               ))
           }


           </tbody>
       </table>
       </div>
    )
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}