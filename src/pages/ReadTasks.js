import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadTasks = (props) => {

    const [task, setTask] = useState([]);

    useEffect(() => {
        setTask(props.data);
    }, [props]);
    
    return (
        <div className="ReadTasks">
            {
                task && task.length > 0 ?
                task.map((task,index) => 
                   <Card id={task.id} Due_Date={task.Due_Date} Description={task.Description} Status={task.Status}/>
                ) : <h2>{'No Tasks Yet'}</h2>
            }
        </div>  
    )
}

export default ReadTasks;