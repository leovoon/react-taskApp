import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>forked from <Link to='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>Traversy Media</Link></p>
      <p>Deploy by Leo Voon</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
