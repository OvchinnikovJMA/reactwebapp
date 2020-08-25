import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Auth = (props) => {
    
    const [password, SetPassword] = useState('');
    
    const checked = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);
    const handlePass = (event) => {
        SetPassword(event.target.value);
    }
    const CheckPassword = (password) => {
        return checked ? <label>Хороший пароль!</label> :
        ((!/^(?=.{8,})/.test(password) && <label>Пароль должен быть длиной не менее 8ми символов</label>) ||
        (!/^(?=.*[0-9])/.test(password) && <label>Пароль должен содержать минимум 1 цифру</label>) ||
        (!/^(?=.*[a-z])(?=.*[A-Z])/.test(password) && <label>Пароль должен содержать минимум 1 прописную и строчную латинские буквы</label>))
    }

    const CheckUser = () => {
        (!checked || !props.login) ? alert('Неправильно введён логин или пароль!'): props.handleAuth(true);
    } 

    return(
        <form id="auth">
            <div className="form-group">
                <h1>Войдите в приложение</h1>
                <label for="exampleInputLogin">Логин:</label>
                <input type="login" className="form-control" id="exampleInputLogin" placeholder="Введите логин" name="login" value={props.login} onChange={props.handleLogin}/>
                <small id="LoginHelp" class="form-text text-muted">Введите существующий логин Github</small>
                <label for="exampleInputPassword">Пароль:</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Введите пароль" name="password" value={password} onChange={handlePass}/>
                <small id="passwordHelp" class="form-text text-muted">{CheckPassword(password)}</small>
                <Link className="btn btn-primary" to={checked? "/buyers" : "/"} onClick={CheckUser}>Войти</Link>
            </div> 
        </form>
    )
}
export default Auth