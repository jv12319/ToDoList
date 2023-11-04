import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditTask.css'
import { supabase } from '../client'

const EditTask = ({ data }) => {
    const { id } = useParams();
    const task = data.find(item => item.id === id);

    const [updateTask, setUpdateTask] = useState({
        Due_Date: '',
        Description: '',
        Status: '',
    });

    useEffect(() => {
        if (task) {
            setUpdateTask({
                Due_Date: task.Due_Date,
                Description: task.Description,
                Status: task.Status,
            });
        }
    }, [task]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUpdateTask( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateTaskData = async (event) => {
        event.preventDefault();

        await supabase
            .from('Tasks')
            .update(updateTask)
            .eq('id', id);

        window.location = "/";
    }

    const deleteTask = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Tasks')
          .delete()
          .eq('id', id); 
      
        window.location = "/";
      }

    return (
        <div>
            <form>
                <label htmlFor="due date">Due Date</label> <br />
                <input type="text" id="date" name="Due_Date" value={updateTask.Due_Date} onChange={handleInputChange} /><br />
                <br/>

                <label htmlFor="status">Status</label><br />
                <input type="text" id="Status" name="Status" value={updateTask.Status} onChange={handleInputChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea name="Description" rows="5" cols="50" id="description" value={updateTask.Description} onChange={handleInputChange}></textarea>
                <br/>

                <input type="submit" value="Submit" onClick={updateTaskData} />
                <button className="deleteButton" onClick={deleteTask}>Delete</button>
            </form>
        </div>
    )
}

export default EditTask;
