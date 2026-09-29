import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  ["About", "/about"], ["Our pillars", "/pillars"], ["Opportunities", "/opportunities"],
  ["Events", "/events"], ["Publications", "/publications"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-wrap header-top">
      <Link to="/" className="brand" aria-label="NeuronBridge Initiative home" onClick={() => setOpen(false)}>
        <span className="brand-mark">N</span><span className="brand-name">NeuronBridge<small>Initiative · UCLA</small></span>
      </Link>
      <div className="header-note">A student-led community at the intersection<br />of neuroscience &amp; service</div>
      <Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</Button>
    </div>
    <nav className={`nav-bar ${open ? "open" : ""}`} aria-label="Main navigation"><div className="site-wrap nav-inner">
      <div className="nav-links">{links.map(([label, path]) => <Link key={path} to={path} className="nav-link" activeProps={{ className: "nav-link active" }} onClick={() => setOpen(false)}>{label}</Link>)}</div>
      <Link to="/join" className="nav-join" onClick={() => setOpen(false)}>Get involved <ArrowUpRight size={15} /></Link>
    </div></nav>
  </header>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-wrap">
    <div className="footer-grid"><div><div className="footer-brand">NeuronBridge<br /><em>Initiative.</em></div><p className="footer-caption">A developing UCLA student organization connecting curiosity, care, and community through neuroscience.</p></div>
      <div><p className="footer-label">Explore</p><div className="footer-links"><Link to="/about">Our story</Link><Link to="/pillars">Six pillars</Link><Link to="/opportunities">Opportunities</Link><Link to="/events">Events & meetings</Link></div></div>
      <div><p className="footer-label">Connect</p><div className="footer-links"><Link to="/join">Join the interest list</Link><Link to="/join">Founding members</Link><Link to="/publications">Publications</Link><Link to="/contact">Contact us</Link></div></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} NeuronBridge Initiative</span><span>Developing student organization · Working toward UCLA registration</span></div>
  </div></footer>;
}
