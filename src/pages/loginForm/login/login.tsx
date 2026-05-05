import { useState } from 'react';
import './login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe]     = useState(false);

  return (
    <div className="login-page">

      <div className="login-page__bg-orb login-page__bg-orb--1" />
      <div className="login-page__bg-orb login-page__bg-orb--2" />

      <div className="login-page__container">

        <aside className="login-page__panel">
          <div className="login-page__panel-inner">

            <div className="login-page__logo">
              <span className="login-page__logo-mark">✦</span>
              <span className="login-page__logo-name">Luminary</span>
            </div>

            <div className="login-page__panel-copy">
              <h2 className="login-page__panel-heading">Welcome back</h2>
              <p className="login-page__panel-sub">
                Pick up right where you left off. Your courses, progress and
                community are waiting for you.
              </p>
            </div>

            <blockquote className="login-page__testimonial">
              <p className="login-page__testimonial-text">
                "Luminary completely changed how I learn. I went from zero to
                landing my first dev job in 6 months."
              </p>
              <footer className="login-page__testimonial-author">
                <span className="login-page__testimonial-avatar">NF</span>
                <span>
                  <strong>Noor Ali</strong>
                  <small>Full-Stack Developer</small>
                </span>
              </footer>
            </blockquote>

            <ul className="login-page__stats">
              <li className="login-page__stat">
                <span className="login-page__stat-number">50K+</span>
                <span className="login-page__stat-label">Learners</span>
              </li>
              <li className="login-page__stat">
                <span className="login-page__stat-number">500+</span>
                <span className="login-page__stat-label">Courses</span>
              </li>
              <li className="login-page__stat">
                <span className="login-page__stat-number">4.9★</span>
                <span className="login-page__stat-label">Rating</span>
              </li>
            </ul>

            <p className="login-page__panel-note">
              Don't have an account?{' '}
              <a href="/signup" className="login-page__panel-link">Sign up free →</a>
            </p>

          </div>
        </aside>

        <main className="login-page__form-panel">
          <div className="login-page__form-wrap">

            <header className="login-page__form-header">
              <div className="login-page__form-logo">
                <span className="login-page__logo-mark">✦</span>
                <span className="login-page__logo-name">Luminary</span>
              </div>
              <h1 className="login-page__title">Log in to your account</h1>
              <p className="login-page__subtitle">
                Welcome back! Please enter your credentials.
              </p>
            </header>

            <div className="login-page__social">
              <button type="button" className="login-page__social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button type="button" className="login-page__social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="login-page__divider">
              <span>or continue with email</span>
            </div>

            <form className="login-page__form" noValidate>

              <div className="login-page__field">
                <label className="login-page__label" htmlFor="email">
                  Email address
                </label>
                <input
                  className="login-page__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="noor@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="login-page__field">
                <div className="login-page__label-row">
                  <label className="login-page__label" htmlFor="password">
                    Password
                  </label>
                  <a href="/forgot-password" className="login-page__forgot-link">
                    Forgot password?
                  </a>
                </div>
                <div className="login-page__input-eye-wrap">
                  <input
                    className="login-page__input login-page__input--eye"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="login-page__eye-btn"
                    onClick={() => setShowPassword(v => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <label className="login-page__checkbox-label">
                <input
                  className="login-page__checkbox"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />
                <span className="login-page__checkbox-custom" />
                <span className="login-page__checkbox-text">
                  Keep me logged in for 30 days
                </span>
              </label>

              <button type="submit" className="login-page__submit-btn">
                Log in
              </button>

            </form>

            <p className="login-page__sso-note">
              Using a company account?{' '}
              <a href="/sso" className="login-page__link">Log in with SSO →</a>
            </p>

            <div className="login-page__divider login-page__divider--slim" />

            <p className="login-page__signup-hint">
              Don't have an account?{' '}
              <a href="/signup" className="login-page__link">Create one free</a>
            </p>

            <div className="login-page__security">
              <span className="login-page__security-icon">🔒</span>
              <span className="login-page__security-text">
                256-bit SSL encrypted · Your data is always safe
              </span>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}