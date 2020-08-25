import React from 'react'
import {Redirect} from 'react-router-dom'

const Buyer = (props) => {
    const user = props.location.state.detail;
    console.log(props, user);
    return(1 ?
        <div className="table-responsive">
            <h2>Покупатель</h2>
            <table id="Table" className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>ID Покупателя</th>
                            <th>Имя покупателя</th>
                            <th>Средний чек</th>
                            <th>Количество покупок</th>
                            <th>Общая выручка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.ID}</td>
                            <td>{user.name}</td>
                            <td>{user.AverageCheck}</td>
                            <td>{user.Purchases}</td>
                            <td>{user.TotalProfit}</td>
                        </tr>
                    </tbody>
            </table>
        </div> :
        <Redirect to="/buyers"/>
    )
}

export default Buyer