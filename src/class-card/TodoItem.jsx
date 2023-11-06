import React, { useState, useEffect } from 'react';
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

function TodoItem({ text }) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(false);
  }, [text]); 
  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox sx={{ mr: 2 }} checked={isCompleted} onChange={toggleCompletion} />
      <Typography variant="body2" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {text}
      </Typography>
    </div>
  );
}

export default TodoItem;
