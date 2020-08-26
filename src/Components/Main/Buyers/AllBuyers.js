import React, {useState, useEffect} from 'react'
import BuyerRow from './BuyerRow'
const AllBuyers = (props) => {
    const [Name, SetName] = useState('');
    const [Buyers, SetBuyers] = useState(props.data);
    const [pagination, Setpagination] = useState({page: 1, count: 15});

    const handleName = (event) => {
        SetName(event.target.value);
        if(event.target.value === '')
        {
            SetBuyers(props.data);
        }
        else SetBuyers(Array.from(Buyers).filter(elem => elem.name.startsWith(event.target.value)))
    }
    const TableClick = (event) => {
        event.target.className === "AverageCheck" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.AverageCheck > user2.AverageCheck ? 1 : -1))
        event.target.className === "Purchases" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.Purchases > user2.Purchases ? 1 : -1))
        event.target.className === "TotalProfit" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.TotalProfit > user2.TotalProfit ? 1 : -1))
    }
    useEffect(() => {
        SetBuyers(Array.from(props.data).slice(pagination.page*pagination.count - pagination.count, pagination.page * pagination.count))
    }, [pagination])

    const GetPrevPage = () => {
        !((pagination.page - 1) === 0) && Setpagination({page: pagination.page - 1, count: pagination.count});        
    }
    const SetFivePagination = () => {    
        (pagination.count === 5) ? Setpagination({page: pagination.page, count: props.data.length}) : Setpagination({page: pagination.page, count: 5});
    }   
    const SetTenPagination = () => {
        (pagination.count === 10) ? Setpagination({page: pagination.page, count: props.data.length}) : Setpagination({page: pagination.page, count: 10});
    } 
    const SetFifteenPagination = () => {
        (pagination.count === 15) ? Setpagination({page: pagination.page, count: props.data.length}) : Setpagination({page: pagination.page, count: 15});  
    }
    const GetNextPage = () => {
        !((pagination.count * pagination.page) >= props.data.length) && Setpagination({page: pagination.page + 1, count: pagination.count});
    }
    return(
        <div className="table-responsive">
            <h2>Покупатели</h2>
            <table id="Table" className="table table-striped table-sm" onClick={TableClick}>
                <thead>
                    <tr>
                        <th>ID Покупателя</th>
                        <th>Имя покупателя</th>
                        <th className="AverageCheck">Средний чек</th>
                        <th className="Purchases">Количество покупок</th>
                        <th className="TotalProfit">Общая выручка</th>
                    </tr>
                </thead>
                <tbody>
                    {Buyers.map(
                        (e) => {
                            return(
                                <BuyerRow user={e}/>
                            )
                        }
                    )}
                </tbody>
            </table>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><button onClick={GetPrevPage} className="page-link prev" href="#">Предыдущая</button></li>
                    <li className="page-item"><button onClick={SetFivePagination} className="page-link five">5</button></li>
                    <li className="page-item"><button onClick={SetTenPagination} className="page-link ten">10</button></li>
                    <li className="page-item"><button onClick={SetFifteenPagination} className="page-link fifteen">15</button></li>
                    <li className="page-item"><button onClick={GetNextPage} className="page-link next" href="#">Следующая</button></li>
                </ul>
            </nav>
            <div>
                <strong for="InputName">Поиск по имени</strong>
                <input className="form-control" id="InputName" placeholder="Введите имя" value={Name} onChange={handleName}/>
            </div>
        </div>   
    )
}

export default AllBuyers