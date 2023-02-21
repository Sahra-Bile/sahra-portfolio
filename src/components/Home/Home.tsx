import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
// import { Typical } from 'react-typical'
import './Home.scss'
export const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-container__profile">
        <div className="profile-container__profile__detailds">
          <div className="profile-container__profile__detailds__cols">
            <Link
              className="icon-links"
              to="https://www.linkedin.com/in/sara-bile-75871610b"
            >
              <FaLinkedin className="icons" />
            </Link>
            <Link className="icon-links" to="https://github.com/Sahra-Bile">
              <FaGithub />
            </Link>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              Hello, I'm <span className="highlighted-text">Sahra</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {''}
              <h1>{/* <Typical /> */}</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
