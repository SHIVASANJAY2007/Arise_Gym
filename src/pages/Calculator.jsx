import React, { useState } from "react";
import "./Calculator.css"; // Optional styling

const BulkCutCalculator = () => {
  // Common inputs
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("bulk"); // 'bulk' or 'cut'

  // Results
  const [tdee, setTdee] = useState(0);
  const [calorieTarget, setCalorieTarget] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fats: 0 });

  // Calculate TDEE (Total Daily Energy Expenditure)
  const calculateTDEE = () => {
    if (!weight || !height || !age) return;

    // Mifflin-St Jeor Formula (men/women simplified)
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * parseFloat(age) + 5;

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    const tdeeValue = bmr * activityMultipliers[activityLevel];
    setTdee(Math.round(tdeeValue));

    // Calorie target based on goal
    const surplusOrDeficit = goal === "bulk" ? 250 : -500; // Bulk: +250kcal, Cut: -500kcal
    setCalorieTarget(Math.round(tdeeValue + surplusOrDeficit));

    // Macro split (40% carbs, 30% protein, 30% fats for bulk; adjust for cut)
    const protein = Math.round((goal === "bulk" ? 2.2 : 2.5) * weightKg);
    const fats = Math.round((calorieTarget * 0.3) / 9); // 1g fat = 9kcal
    const carbs = Math.round((calorieTarget - (protein * 4 + fats * 9)) / 4); // 1g carb/protein = 4kcal
    setMacros({ protein, carbs, fats });
  };

  return (
    <div className="about-container">

    <div className="calculator">
      <h1>Bulking & Weight Loss Calculator</h1>

      {/* Input Form */}
      <div className="input-section">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          placeholder="Enter Weight"
          onChange={(e) => setWeight(e.target.value)}
        />

        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          placeholder="Enter Height"
          onChange={(e) => setHeight(e.target.value)}
        />

        <label>Age</label>
        <input
          type="number"
          value={age}
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Activity Level</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Exercise</option>
          <option value="moderate">Moderate Exercise</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>

        <label>Goal</label>
        <div className="goal-toggle">
          <button
            className={goal === "bulk" ? "active" : ""}
            onClick={() => setGoal("bulk")}
          >
            Bulking
          </button>
          <button
            className={goal === "cut" ? "active" : ""}
            onClick={() => setGoal("cut")}
          >
            Cutting
          </button>
        </div>

        <button onClick={calculateTDEE} className="calculate-btn">
          Calculate
        </button>
      </div>

      {/* Results */}
      {tdee > 0 && (
        <div className="results-section">
          <h2>Your Plan</h2>
          <p><strong>TDEE:</strong> {tdee} kcal/day</p>
          <p>
            <strong>Calorie Target:</strong> {calorieTarget} kcal/day (
            {goal === "bulk" ? "Surplus" : "Deficit"})
          </p>
          <h3>Macros:</h3>
          <ul>
            <li>Protein: {macros.protein}g</li>
            <li>Carbs: {macros.carbs}g</li>
            <li>Fats: {macros.fats}g</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default BulkCutCalculator;