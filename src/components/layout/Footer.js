import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className="copy_right">
        <span>Costs</span> &copy; 2022
      </p>
    </footer>

  )
}