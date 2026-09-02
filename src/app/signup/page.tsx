import Link from "next/link";

export default function SignupPage() {
  return <main className="auth-page"><Link href="/" className="brand"><span className="brand-mark">F</span> flowdesk</Link><section className="auth-card"><span className="eyebrow">Start focused</span><h1>Create your account.</h1><p>A clear, calmer place for your team to do its best work.</p><form><div className="name-grid"><label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label></div><label>Work email<input type="email" name="email" placeholder="you@company.com" required /></label><label>Password<input type="password" name="password" placeholder="At least 12 characters" minLength={12} required /></label><button className="button" type="submit">Create account <span>→</span></button></form><div className="auth-footer">Already have an account? <Link href="/login">Sign in</Link></div></section></main>;
}
