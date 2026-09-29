import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
export function PageHead({ label, title, description }: { label: string; title: string; description: string }) {
  return <div className="page-head"><div className="site-wrap"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{description}</p></div></div>;
}
export function Callout({ title = "Help build what comes next.", label = "Be part of the beginning" }: { title?: string; label?: string }) {
  return <section className="callout"><div className="site-wrap callout-inner"><div><span className="eyebrow">{label}</span><h2>{title}</h2></div><Link to="/join" className="action-primary">Join the interest list <ArrowUpRight size={16} /></Link></div></section>;
}
export function StatusNotice() { return <div className="notice"><strong>Currently taking shape.</strong> NBI is in its founding stage and is working toward becoming a fully registered UCLA student organization. Details will be shared as they are confirmed.</div>; }
