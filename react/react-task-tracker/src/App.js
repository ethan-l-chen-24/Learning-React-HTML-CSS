import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  // first is the name of the state, the second is the function
    // to update the state
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "Doctors Appointment",
          day: "Feb 5th at 2:30pm",
          reminder: true
      },
      {
          id: 2,
          text: "Meeting at School",
          day: "Feb 6th at 1:30pm",
          reminder: true
      },
      {
          id: 3,
          text: "Food Shopping",
          day: "Feb 5th at 2:30pm",
          reminder: false
      }
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if(task.id === id) {
        task.reminder = !task.reminder;
      }
      return task;
    }))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks To Show'  
    }
      
    </div>
  );
}

export default App;
