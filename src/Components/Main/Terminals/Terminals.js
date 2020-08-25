import React, {useState} from 'react'
import Row from './TerminalRow'

const Terminals = () => {
    let [id, Setid] = useState(0);
    const [Name, SetName] = useState('');
    const [Description, SetDescrition] = useState('');
    const [rows, SetRows] = useState([]);
    const handleName = (event) => {
        SetName(event.target.value);
    }
    const handleDescription = (event) => {
        SetDescrition(event.target.value);
    }
    
    const AddTerminal = () => {
        Setid(id + 1);
        SetRows([...rows, 
        <Row 
            key={id} 
            Name={Name} 
            Description={Description}
        />]);
    }
    const TableEvent = (event) => {
        event.target.tagName === 'BUTTON' && document.getElementById('Table').deleteRow(event.target.closest('tr').rowIndex);
        
    }
    return(
        <React.Fragment>
            <div className="form-group">
                <label for="InputTerminalName">Название терминала</label>
                <input className="form-control" id="InputTerminalName" placeholder="Терминал" value={Name} onChange={handleName}/>
                <small id="NameHelp" class="form-text text-muted">Введите название терминала</small>
                <label for="InputTerminalDescription">Описание</label>
                <input className="form-control" id="InputTerminalDescription" placeholder="Введите описание" value={Description} onChange={handleDescription}/>
                <small id="DescriptionHelp" class="form-text text-muted">Введите описание терминала</small>
                <button className="btn btn-primary" onClick={AddTerminal}>Добавить</button>
            </div>
            {rows.length !== 0 &&
            <div className="table-responsive">
                <h2>Список терминалов</h2>
                <table id="Table" className="table table-striped table-sm" onClick={TableEvent}>
                    <thead>
                        <tr>
                            <th>Название терминала</th>
                            <th>Описание терминала</th>
                            <th>Команда</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>}
            
        </React.Fragment>
    )
}

export default Terminals