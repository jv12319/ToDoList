import React, { useState } from 'react';
import './CreateTask.css'
import { supabase } from '../client'

const CreateTask = () => {

    const [task, setTask] = useState({Due_Date: "", Description: "", Status: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setTask( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createTask = async (event) => {
        event.preventDefault();

       const { error } = await supabase
        .from('Tasks')
        .insert({Due_Date: task.Due_Date, Description: task.Description, Status: task.Status})
        .select()

        if (error) {
            console.log(error);
        }

        window.location = "/";

    }

    return (
        <div>
            <form>
                <label>Due Date</label> <br />
                <input type="text" id="date" name="Due_Date" value={task.Due_Date} onChange={handleChange} /><br />
                <br />

                <label>Status</label><br />
                <input type="text" id="Status" name="Status" value={task.Status} onChange={handleChange} /><br />
                <br />

                <label>Description</label><br />
                <textarea name="Description" rows="5" cols="50" id="description" value={task.Description} onChange={handleChange}>
                </textarea>

                <br />
                <input type="submit" value="Submit" onClick={createTask} />
            </form>
        </div>
    )
}

export default CreateTask