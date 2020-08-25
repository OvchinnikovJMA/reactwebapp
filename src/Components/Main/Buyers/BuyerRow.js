import React from 'react'
import {Link} from 'react-router-dom'

const BuyerRow = (props) => {
    return(
        <tr>
            <td><Link to={{ pathname: '/buyers/' + props.user.ID,
                            state: {detail: props.user}
                            }}>{props.user.ID}</Link></td>
            <td>{props.user.name}</td>
            <td>{props.user.AverageCheck}</td>
            <td>{props.user.Purchases}</td>
            <td>{props.user.TotalProfit}</td>
        </tr>
    )
}

export default BuyerRow