import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Task from "./Task/Task";
import NewTask from "./NewTask/NewTask";
import { getToken } from "../../utils/getToken";

import "./TaskList.css";

import { HiPlus } from "react-icons/hi";

export default function TaskList(props) {
  const dispatch = useDispatch();

  const [scroll, setScroll] = useState({ overflow: "hidden" });
  const [tasks, setTasks] = useState([]);
  const [addNewTask, setAddNewTask] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.auth.user);

  const token = getToken();

  useEffect(() => {
    const getAllTasks = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/task?projectId=${
          props.project._id
        }&creator=${user._id === props.project.creator}`,
        {
          method: "GET",
          cache: "no-cache",
          mode: "cors",
          headers: {
            "Content-type": "application/json",
            "x-authorization-token": token,
          },
        }
      );

      const data = await response.json();
      setTasks(data.tasks);
      setIsLoading(false);
    };

    getAllTasks();
  }, []);

  const addTaskHandler = async (newTask) => {
    setAddNewTask(false);

    let response = await fetch("http://localhost:3000/api/task/create", {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "x-authorization-token": token,
      },
      body: JSON.stringify({ projectId: props.project._id, ...newTask }),
    });

    let data = await response.json();
    let newTasks = [...tasks];
    newTasks.push(data.task);
    setTasks(newTasks);

    response = await fetch("http://localhost:3000/api/project/update/add", {
      method: "PUT",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "x-authorization-token": token,
      },
      body: JSON.stringify({ projectId: props.project._id }),
    });

    data = await response.json();
    console.log(data);
  };

  const deleteTaskHandler = async (id) => {
    const taskIndex = tasks.findIndex((task) => {
      return id === task._id;
    });

    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);

    const response = await fetch(
      "http://localhost:3000/api/project/update/delete",
      {
        method: "PUT",
        cache: "no-cache",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "x-authorization-token": token,
        },
        body: JSON.stringify({ projectId: props.project._id }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  const updateTaskHandler = async (id, task) => {
    const taskIndex = tasks.findIndex((task) => {
      return id === task._id;
    });

    const newTasks = [...tasks];
    newTasks[taskIndex] = task;

    setTasks(newTasks);
  };

  return (
    <div
      className="container"
      onClick={() => {
        //setAddNewTask(false);
      }}
    >
      <div className="title">
        <h2>My Tasks</h2>
        {true && (
          <div
            style={{
              borderRadius: "50%",
              background: "#0047FF",
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HiPlus
              onClick={(e) => {
                setAddNewTask(true);
                e.stopPropagation(true);
              }}
              size={40}
              color="white"
            />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          maxHeight: "32rem",
          marginRight: 2,
          ...scroll,
        }}
        onMouseEnter={(e) => {
          setScroll({ overflow: "auto" });
        }}
        onMouseLeave={(e) => {
          setScroll({ overflow: "hidden" });
        }}
      >
        {addNewTask && <NewTask addTask={addTaskHandler} closeTask={setAddNewTask} />}
        {tasks.length ? (
          <>
            {tasks.map((task) => (
              <Task
                task={task}
                key={task._id}
                creator={user.email === props.project.creator}
                deleteTask={deleteTaskHandler}
                updateTask={updateTaskHandler}
              />
            ))}
          </>
        ) : (
          !addNewTask && (
            <h2
              style={{
                marginTop: "40%",
              }}
            >
              No tasks are available
            </h2>
          )
        )}
      </div>
    </div>
  );
}
