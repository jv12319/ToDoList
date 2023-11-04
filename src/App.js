import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import ReadTasks from './pages/ReadTasks';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import { Link } from 'react-router-dom';
import { supabase } from './client';

const App = () => {
  const [task, setTask] =  useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await supabase.from('Tasks').select();
      setTask(data);
    };

    fetchTasks();
  }, []);

  

  let element = useRoutes([
    {
      path: '/',
      element: <ReadTasks data={task} />
    },
    {
      path: '/edit/:id',
      element: <EditTask data={task} />
    },
    {
      path: '/new',
      element: <CreateTask />
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Your To Do List!!</h1>
        <Link to="/">
          <button className="headerBtn"> View Your Tasks </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create New Tasks </button>
        </Link>
      </div>
      {element}
    </div>
  );
}

export default App;
