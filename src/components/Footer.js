import './Footer.css';
import { BsFacebook,BsInstagram,BsTwitter  } from "react-icons/bs";
import { GiWhiteBook } from "react-icons/gi";

function Footer() {
  return (
    <div className='footerContainer'>
      <div> <GiWhiteBook size={60} color={"#F7AB0A"}  /></div>
      <div className='footerWrapper'> 
       <div className='footersHeader'>
        <h2>LIBMS</h2>
        <p> Your Online Library...</p>
       </div>

       <div className='footersLinks'>
        <ul>
          <li>Home</li>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
       </div>

       < div className='footersSocialIcons'>
        <BsFacebook className='icon' />
         <BsInstagram className='icon' />
         <BsTwitter className='icon' />
         <BsFacebook className='icon' />
       </div>

       <div className='textFooter'>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
       </div>
       </div> 
       <div><GiWhiteBook size={60} color={"#F7AB0A"}/></div>
    </div>
  )
}

export default Footer;