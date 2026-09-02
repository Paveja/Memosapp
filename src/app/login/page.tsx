import Link from "next/link";

export default function LoginPage() {
  return <main className="auth-page"><Link href="/" className="brand"><span className="brand-mark">F</span> flowdesk</Link><section className="auth-card"><span className="eyebrow">Welcome back</span><h1>Sign in to your workspace.</h1><p>Pick up where your team left off.</p><form><label>Email<input type="email" name="email" placeholder="you@company.com" required /></label><label>Password<input type="password" name="password" placeholder="Your password" required /></label><div className="form-row"><label className="check"><input type="checkbox" /> Remember me</label><a href="#reset">Forgot password?</a></div><button className="button" type="submit">Sign in</button></form><div className="auth-footer">New to FlowDesk? <Link href="/signup">Create an account</Link></div></section></main>;
}
