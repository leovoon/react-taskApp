import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>forked from <a target="_blank" href='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>Traversy Media</a></p>
      <p>Deploy by Leo Voon</p>
      <Link to='/' style={{ marginTop: '1rem' }}>Go Back</Link>
    </div>
  )
}

export default About
