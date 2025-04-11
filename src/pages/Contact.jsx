import { FaDumbbell, FaRunning, FaRegClock } from "react-icons/fa";
import './Freeplan.css';

export default function WorkoutPlan() {
  const workoutDays = [
    {
      day: "Monday",
      type: "Chest & Triceps",
      exercises: [
        "Bench Press: 4 sets x 8 reps",
        "Incline Dumbbell Press: 3 sets x 10 reps",
        "Chest Fly: 3 sets x 12 reps",
        "Tricep Dips: 3 sets x 12 reps",
        "Tricep Pushdown: 3 sets x 15 reps"
      ],
      duration: "60 mins"
    },
    {
      day: "Tuesday",
      type: "Cardio & Core",
      exercises: [
        "Treadmill Running: 20 mins",
        "Rowing Machine: 15 mins",
        "Plank: 3 sets x 1 min",
        "Russian Twists: 3 sets x 20 reps",
        "Leg Raises: 3 sets x 15 reps"
      ],
      duration: "45 mins"
    },
    {
      day: "Wednesday",
      type: "Back & Biceps",
      exercises: [
        "Pull-ups: 4 sets x 8 reps",
        "Lat Pulldown: 3 sets x 10 reps",
        "Seated Row: 3 sets x 12 reps",
        "Barbell Curl: 3 sets x 10 reps",
        "Hammer Curl: 3 sets x 12 reps"
      ],
      duration: "60 mins"
    },
    {
      day: "Thursday",
      type: "Rest Day",
      exercises: ["Active recovery or stretching"],
      duration: "-"
    },
    {
      day: "Friday",
      type: "Leg Day",
      exercises: [
        "Squats: 4 sets x 8 reps",
        "Leg Press: 3 sets x 10 reps",
        "Romanian Deadlifts: 3 sets x 12 reps",
        "Leg Curls: 3 sets x 15 reps",
        "Calf Raises: 4 sets x 20 reps"
      ],
      duration: "60 mins"
    },
    {
      day: "Saturday",
      type: "Full Body HIIT",
      exercises: [
        "Circuit Training (45 sec work/15 sec rest)",
        "1. Kettlebell Swings",
        "2. Burpees",
        "3. Jump Squats",
        "4. Mountain Climbers",
        "5. Battle Ropes"
      ],
      duration: "30 mins"
    },
    {
      day: "Sunday",
      type: "Rest Day",
      exercises: ["Complete rest or light yoga"],
      duration: "-"
    }
  ];

  return (
    <div className="workout-plan">
      <h1><FaDumbbell /> Weekly Workout Plan</h1>
      <div className="plan-container">
        {workoutDays.map((dayPlan, index) => (
          <div key={index} className="day-card">
            <h2>{dayPlan.day}</h2>
            <h3>{dayPlan.type}</h3>
            <p className="duration">
              <FaRegClock /> {dayPlan.duration}
            </p>
            <ul>
              {dayPlan.exercises.map((exercise, i) => (
                <li key={i}>{exercise}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}