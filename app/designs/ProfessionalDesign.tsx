export default function ProfessionalDesign() {
    return (
      <div className="professional-design">
        <h2>Professional Design</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Heart Rate</h3>
            <p className="big-number">72 BPM</p>
            <p className="small-text">Normal range</p>
            <div className="progress-bar" style={{ width: "72%" }}></div>
            <p className="trend">2% increase from yesterday</p>
          </div>
          <div className="card">
            <h3>Steps</h3>
            <p className="big-number">8,439</p>
            <p className="small-text">Goal: 10,000</p>
            <div className="progress-bar" style={{ width: "84%" }}></div>
            <p className="trend">1,561 steps to go</p>
          </div>
          <div className="card">
            <h3>Sleep</h3>
            <p className="big-number">7h 23m</p>
            <p className="small-text">Recommended: 8h</p>
            <div className="progress-bar" style={{ width: "92%" }}></div>
            <p className="trend">37m increase from average</p>
          </div>
        </div>
        <div className="card wide">
          <h3>Weekly Activity Summary</h3>
          <div className="chart-placeholder large"></div>
        </div>
        <div className="card-grid">
          <div className="card">
            <h3>Workout Log</h3>
            <ul className="log-list">
              <li>
                <span>Running</span>
                <span>30 min</span>
              </li>
              <li>
                <span>Strength Training</span>
                <span>45 min</span>
              </li>
              <li>
                <span>Yoga</span>
                <span>60 min</span>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Nutrition Tracker</h3>
            <div className="nutrition-item">
              <span>Calories</span>
              <span>1,200 / 2,000</span>
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <div className="nutrition-item">
              <span>Protein</span>
              <span>75g / 100g</span>
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <div className="nutrition-item">
              <span>Carbs</span>
              <span>150g / 250g</span>
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  