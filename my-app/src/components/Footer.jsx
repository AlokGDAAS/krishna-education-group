import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer id="contact" className="py-8 bg-black/80 mt-2 rounded shadow-lg text-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-6 ">
          <div>
            <h4 className="font-bold">Krishna Education Group</h4>
            <p className="text-sm text-slate-300 ">Empowering Students. Transforming Futures.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#brochure" className="hover:underline">Brochure</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="mt-2 text-sm text-slate-300">Email: <strong>CONTACT_EMAIL</strong><br/>Phone: <strong>PHONE</strong><br/>Address: ADDRESS</p>
          </div>
        </div>
        <hr className="border-none bg-gray-400 h-[1px] mt-8" />
        <div className="mt-6 text-center text-sm text-slate-300">© {new Date().getFullYear()} Krishna Education Group powered by Alok-Dev — All rights reserved.</div>
      </Container>
    </footer>
  );
};

export default Footer;