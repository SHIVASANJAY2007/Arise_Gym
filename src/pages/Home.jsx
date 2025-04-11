import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>TRANSFORM YOUR BODY</h1>
        <p>Join the best gym website in world and achieve your fitness goals</p>
        <Link to="/register"><button className="cta-button">Get Started</button></Link>
      </section>
    </div>
  )
}