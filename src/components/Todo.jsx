import React, { useState } from 'react';
import { utilFunctions } from './functions';

const Todo = () => {
  const now = new Date();
  const currentDate = now.toISOString().slice(0, 10);
  const currentTime = now.toTimeString().slice(0, 5);
  const [header, changeHeader] = useState('');
  const [info, changeInfo] = useState('');
  const [date, changeDate] = useState(currentDate);
  const [time, changeTime] = useState(currentTime);
  const [tasks, changeTasks] = useState([]);

  const getTaskById = (taskId) => {
    return tasks.find((task) => task.taskId === taskId);
  };

  const toggleTaskDone = (taskIdGiven) => {
    changeTasks(
      tasks.map((task) => {
        if (task.taskId === taskIdGiven) {
          return {
            ...task,
            taskIsDone: !task.taskIsDone,
          };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskIdGiven) => {
    const newTasks = tasks.filter((task) => {task.taskId !== taskIdGiven})
    changeTasks(newTasks)
  }

  const createTask = (e) => {
    e.preventDefault();
    if (header.length < 3) {
      console.error('Header error');
      return;
    }
    if (info.length < 3) {
      console.error('info error');
      return;
    }

    const taskDeadline = `${date} ${time}`;

    const newTask = {
      taskId: utilFunctions.uniqueId('task'),
      taskHeader: header,
      taskInfo: info,
      taskDeadline: taskDeadline,
      taskIsDone: false,
    };

    changeTasks([...tasks, newTask]);

    changeHeader('');
    changeInfo('');
    changeDate(currentDate);
    changeTime(currentTime);
  };

  return (
    <div className="container-lg">
      <div className="container-lg height-30rem border border-info mt-5 blur-filter mb-5 p-0 rounded-2">
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className={`list-group-item d-flex gap-3 align-items-center ${
                task.taskIsDone ? 'opacity-50' : ''
              }`}
            >
              <h4 className="mb-0 text-center">{task.taskHeader}</h4>
              <span className="text-end align-items-b text-truncate">
                {task.taskInfo}
              </span>
              <div className="ms-auto d-flex gap-3">
                <span className="align-items-center d-flex">
                  {task.taskDeadline}
                </span>
                <button
                  onClick={() => {
                    toggleTaskDone(task.taskId);
                  }}
                  type="button"
                  className="btn btn-secondary"
                >
                  ✅
                </button>
                <button type="button" onClick={() => {deleteTask(task.taskId)}} className="btn btn-secondary">
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={createTask}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task heading"
            value={header}
            onChange={(e) => changeHeader(e.target.value)}
            aria-label="Username"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="date"
            value={date}
            className="form-control text-center"
            onChange={(e) => changeDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            className="form-control text-center"
            onChange={(e) => changeTime(e.target.value)}
          />
        </div>
        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Task info"
            value={info}
            onChange={(e) => changeInfo(e.target.value)}
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-info mt-3 mx-auto d-block btn-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Todo;
