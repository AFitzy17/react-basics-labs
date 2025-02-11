import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", priority: "Low", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", priority: "Medium", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", priority: "High", deadline: "Today" }
    ]
  });
  
  return (
    <div className="container">
      <h1>Tasky</h1>
    {taskState.tasks.map((task) => (              
      <Task 
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        priority={task.priority}
        key={task.id}
      />
    ))}
    </div>
  );
}

export default App;
