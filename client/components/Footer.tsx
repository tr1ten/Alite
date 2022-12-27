import Link from 'next/link';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
function Footer() {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
  <div>
    <span className="footer-title">Puzzle</span> 
    <a className="link link-hover">Sudoku</a> 
    <a className="link link-hover">Boggle</a> 
  </div> 
  <div>
    <span className="footer-title">Project</span> 
    <a className="link link-hover">About Author</a> 
    <a className="link link-hover">Contribute</a> 
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <Link href="https://github.com/tr1ten"> <BsGithub className="text-2xl" /></Link>
      <Link href="https://www.linkedin.com/in/tr1ten/"> <BsLinkedin className="text-2xl" /></Link>
    </div>
  </div>
</footer>
    );
}

export default Footer;