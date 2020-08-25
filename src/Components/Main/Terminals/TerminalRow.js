import React from 'react'

const Row = (props) => {
    return (
        <tr>
            <td>{props.Name}</td>
            <td>{props.Description}</td>
            <td>
                <button>Удалить</button>
            </td>
        </tr>
    )
}

export default Row