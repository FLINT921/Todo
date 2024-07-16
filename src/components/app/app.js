import React, { useEffect, useState, useCallback, useMemo } from 'react';

import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/footer';

const App = () => {
  const initialTasks = [
    { title: 'Completed task', date: 1716962823934, timer: 4000 },
    { title: 'Editing task', date: 1716962823934, timer: 4000 },
    { title: 'Active task', date: 1716963124428, timer: 4000 },
  ];

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  let maxId = 0;

  const createTaskItem = useCallback(
    (title, date, timer) => {
      return {
        id: maxId++,
        title: title,
        created: date,
        timer: timer,
        done: false,
        edition: false,
      };
    },
    [maxId],
  );

  useEffect(() => {
    const initializedTasks = initialTasks.map((task) => createTaskItem(task.title, task.date, task.timer));
    setTasks(initializedTasks);
  }, [createTaskItem]);

  const onToggleDone = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task)));
  };

  const addItem = (text, timer) => {
    const newTaskItem = createTaskItem(text, new Date().getTime(), timer);
    setTasks((prevTasks) => [...prevTasks, newTaskItem]);
  };

  const deleteItem = (taskId) => {
    const idx = tasks.findIndex((el) => el.id === taskId);
    const deleteTaskItem = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];
    setTasks(deleteTaskItem);
  };

  const deleteAllCompletedItem = () => {
    const newArray = tasks.filter((el) => !el.done);
    setTasks(newArray);
  };
  const changeEditButton = (taskId) => {
    console.log(taskId);
    if (!tasks.done) {
      const idx = tasks.findIndex((el) => el.id === taskId);
      const oldItem = tasks[idx];
      const newItem = { ...oldItem, edition: !oldItem.edition };
      const newArray = [...tasks.slice(0, idx), newItem, ...tasks.slice(idx + 1)];
      setTasks(newArray);
    } else return setTasks(tasks);
  };
  const changeEdition = (text) => {
    if (text.trim() === ' ') return tasks;

    const idx = tasks.findIndex((el) => el.edition);
    if (idx === -1) return tasks;

    const oldItem = tasks[idx];
    const changeItem = { ...oldItem, title: text, edition: !oldItem.edition };
    const newArray = [...tasks.slice(0, oldItem.id), changeItem, ...tasks.slice(oldItem.id + 1)];
    setTasks(newArray);
  };

  const visibleTask = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((el) => !el.done);
      case 'completed':
        return tasks.filter((el) => el.done);
      case 'all':
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const tasksCount = useMemo(() => {
    return tasks.filter((el) => !el.done).length;
  }, [tasks]);
  console.log(visibleTask);
  return (
    <section className='todoapp'>
      <Header addItem={addItem} />
      <Main
        tasks={visibleTask}
        onToggleDone={onToggleDone}
        deleteItem={deleteItem}
        changeEditButton={changeEditButton}
        changeEdition={changeEdition}
      />
      <Footer
        deleteAllCompletedItem={deleteAllCompletedItem}
        tasksCount={tasksCount}
        setFilter={setFilter}
        filter={filter}
      />
    </section>
  );
};

export default App;
