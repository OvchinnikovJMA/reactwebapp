import React, {useState} from 'react'
import BuyerRow from './BuyerRow'
const AllBuyers = (props) => {
    const [data, Setdata] = useState(props.data);
    const [Name, SetName] = useState('');
    const [Buyers, SetBuyers] = useState(props.data);
    const [pagination, Setpagination] = useState({page: 1, count: 15});

    const handleName = (event) => {
        SetName(event.target.value);
        if(event.target.value === '')
        {
            SetBuyers(props.data);
        }
        else SetBuyers(Array.from(props.data).filter(elem => elem.name.startsWith(event.target.value)))
    }
    const TableClick = (event) => {
        event.target.className === "AverageCheck" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.AverageCheck > user2.AverageCheck ? 1 : -1))
        event.target.className === "Purchases" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.Purchases > user2.Purchases ? 1 : -1))
        event.target.className === "TotalProfit" && SetBuyers(
            Array.from(Buyers).sort((user1, user2) => user1.TotalProfit > user2.TotalProfit ? 1 : -1))
    }
    const GetPrevPage = () => {
        Setpagination(pagination.page - 1 === 0 ? {page: 1, count: pagination.count} : {page: pagination.page - 1, count: pagination.count});
    }
    const SetFivePagination = () => {
        Setdata(
            () => {
                var end = data.lenght > pagination.page * 5 ? pagination.page * 5 : data.lenght;
                if(!pagination.count === 5)
                    return props.data.slice(pagination.page*5 - 5, end);
                else {
                    Setpagination({page: pagination.page, count: data.lenght})
                    return props.data;
                }
            }
        )
    }
    const SetTenPagination = () => {
        Setdata(
            () => {
                var end = data.lenght > pagination.page * 10 ? pagination.page * 10 : data.lenght;
                if(!pagination.count === 10)
                    return props.data.slice(pagination.page*10 - 10, end);
                else {
                    Setpagination({page: pagination.page, count: data.lenght})
                    return props.data;
                }
            }
        )
    }
    const SetFifteenPagination = () => {
        Setdata(
            () => {
                var end = data.lenght > pagination.page * 15 ? pagination.page * 15 : data.lenght;
                if(!pagination.count === 15)
                    return props.data.slice(pagination.page*15 - 15, end);
                else{
                    Setpagination({page: pagination.page, count: data.lenght})
                    return props.data;
                } 
            }
        )
    }
    const GetNextPage = () => {
        Setpagination(pagination.page * 15 > data.lenght ? {page: pagination.page, count: pagination.count} : {page: pagination.page + 1, count: pagination.count});
    }
    // const SetPagination = (event) => {
            
    //     event.target.className === "ten" && 

    //     event.target.className === "fifteen" &&    
    //     event.target.className === "next" && 
    // }

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