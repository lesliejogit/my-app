import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Schedule Alerts</h1>
        <button class="Google-calendar-button">
          <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MWduaThlY3JjcGVnZWxpcTV1dnR0cTYzaG0gMmI2MGM1MDgzMjk1ZGRkYzIwNWZhMTE4ODg0NTFlNmUxNjU2ZjkzNmU0Y2VmNjhkNDY5YWU2OGZiOGI5ZmU2YUBn&amp;tmsrc=2b60c5083295dddc205fa11888451e6e1656f936e4cef68d469ae68fb8b9fe6a%40group.calendar.google.com" style={{textDecoration: 'none', color: 'white'}}>
            Add to Google Calendar
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
