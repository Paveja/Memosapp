import Link from "next/link";
import { ArrowRight, Check, Command, Layers3, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  [Layers3, "One calm workspace", "Projects, tasks, and decisions stay connected without the noise."],
  [Sparkles, "Momentum, made visible", "See what is moving, what is blocked, and what needs a hand."],
  [ShieldCheck, "Trust built in", "Clear ownership, private workspaces, and an audit trail for every change."],
];

export default function LandingPage() {
  return (
    <main className="landing">
      <nav className="landing-nav">
        <Link href="/" className="landing-brand"><span className="landing-mark"><i /><i /><i /></span>FlowDesk</Link>
        <div className="landing-links"><a href="#features">Product</a><a href="#workflow">How it works</a><a href="#security">Security</a></div>
        <div className="landing-actions"><Link href="/login" className="text-link">Sign in</Link><Link href="/signup" className="primary accent-btn">Get started <ArrowRight size={15} /></Link></div>
      </nav>
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">The operating system for focused teams</p><h1>Make progress<br /><em>visible.</em></h1><p className="hero-lead">FlowDesk brings projects, people, and momentum into one considered workspace—so your team can spend less time coordinating and more time shipping.</p><div className="hero-actions"><Link href="/signup" className="primary accent-btn">Start free <ArrowRight size={16} /></Link><Link href="/app" className="demo-link">Explore the workspace <span>↗</span></Link></div><div className="hero-proof"><div className="proof-avatars"><span>AL</span><span>JM</span><span>SK</span><span>+4</span></div><p>Trusted by teams who<br /><strong>care about the work.</strong></p></div></div>
        <div className="hero-visual"><div className="hero-grid" /><div className="preview-window"><div className="preview-top"><span className="preview-dots">● ● ●</span><span className="mono">ACME / OVERVIEW</span><span>⌁</span></div><div className="preview-body"><aside><div className="mini-brand">F</div><div className="mini-nav active">▦ <span>Overview</span></div><div className="mini-nav">◈ <span>Projects</span></div><div className="mini-nav">□ <span>My tasks</span></div><div className="mini-nav">◌ <span>Inbox</span></div></aside><div className="mini-content"><p className="eyebrow">Tuesday, April 16</p><h3>Good morning, Alex.</h3><div className="mini-stats"><div><small>OPEN TASKS</small><strong>24</strong><i>+12% this week</i></div><div><small>ON TRACK</small><strong>08</strong><i>Across 3 projects</i></div></div><div className="mini-board"><div className="board-head"><strong>Team focus</strong><span>View board ↗</span></div><div className="mini-task"><b className="task-dot blue" /><div><strong>Finalize onboarding flow</strong><small>Web platform · Due today</small></div><span>IN PROGRESS</span></div><div className="mini-task"><b className="task-dot green" /><div><strong>Review Q2 launch brief</strong><small>Marketing · Due tomorrow</small></div><span>REVIEW</span></div></div></div></div></div><div className="float-note"><span>✦</span><div><strong>Nice work, Alex.</strong><small>3 tasks completed today</small></div></div></div>
      </section>
      <section id="features" className="feature-section"><p className="eyebrow">Everything in its place</p><h2>Clarity is a <em>feature.</em></h2><div className="feature-grid">{features.map(([Icon, title, body]) => <article key={title as string}><div className="feature-icon"><Icon size={19} /></div><h3>{title as string}</h3><p>{body as string}</p></article>)}</div></section>
      <section id="workflow" className="workflow"><div><p className="eyebrow">Built for the way work moves</p><h2>From first thought<br />to <em>finished.</em></h2></div><div className="workflow-steps"><div><span>01</span><p><strong>Frame the work</strong><br />Give every project a clear home, owner, and direction.</p></div><div><span>02</span><p><strong>Move together</strong><br />Make progress visible with a board that stays current.</p></div><div><span>03</span><p><strong>Learn and improve</strong><br />Turn activity into insight with reports your team trusts.</p></div></div></section>
      <section id="security" className="security-band"><ShieldCheck size={22} /><p><strong>Your work stays yours.</strong> Workspace-level permissions, private attachments, and a complete audit history—by default.</p><Link href="/signup">Read about security ↗</Link></section>
      <footer><Link href="/" className="landing-brand"><span className="landing-mark"><i /><i /><i /></span>FlowDesk</Link><span>Thoughtful tools for meaningful work.</span><span>© 2025 FlowDesk</span></footer>
    </main>
  );
}
