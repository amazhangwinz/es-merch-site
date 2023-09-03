import React from 'react'

type Props = {
    item: string;
    uprice: number;
    size: string;
    qty: number;
    // colour: string;
}

const OrderSummaryItem = (props: Props) => {
    return (
        <div>
            <h3>{props.item}</h3>
            <ul>
                {/* <li>Colour: {props.colour}</li> */}
                <li>Size: {props.size}</li>
                <li>Qty: {props.qty}</li>
                <li>Unit Price: ${props.uprice}</li>

            </ul>
            <hr style={{
                color: "#212121",
                backgroundColor: "#212121",
                height: 2,
            }} />
        </div>
    )
}

export default OrderSummaryItem;