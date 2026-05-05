import { useState } from 'react';
import './signup.css';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="signup-page">

      <div className="signup-page__bg-orb signup-page__bg-orb--1" />
      <div className="signup-page__bg-orb signup-page__bg-orb--2" />

      <div className="signup-page__container">

        <aside className="signup-page__panel">
          <div className="signup-page__panel-inner">
            <div className="signup-page__logo">
              <span className="signup-page__logo-mark">✦</span>
              <span className="signup-page__logo-name">Luminary</span>
            </div>

            <div className="signup-page__panel-copy">
              <h2 className="signup-page__panel-heading">
                Begin your journey with us
              </h2>
              <p className="signup-page__panel-sub">
                Thousands of learners trust Luminary to level up their skills every day.
              </p>
            </div>

            <ul className="signup-page__perks">
              <li className="signup-page__perk">
                <span className="signup-page__perk-icon">🚀</span>
                <span>Access 500+ curated courses</span>
              </li>
              <li className="signup-page__perk">
                <span className="signup-page__perk-icon">🎯</span>
                <span>Personalised learning paths</span>
              </li>
              <li className="signup-page__perk">
                <span className="signup-page__perk-icon">🏅</span>
                <span>Earn verified certificates</span>
              </li>
              <li className="signup-page__perk">
                <span className="signup-page__perk-icon">🤝</span>
                <span>Join a thriving community</span>
              </li>
            </ul>

            <p className="signup-page__panel-note">
              Already have an account?{' '}
              <a href="/login" className="signup-page__panel-link">Log in →</a>
            </p>
          </div>
        </aside>

        {/* Right panel — form */}
        <main className="signup-page__form-panel">
          <div className="signup-page__form-wrap">

            <header className="signup-page__form-header">
              <h1 className="signup-page__title">Create account</h1>
              <p className="signup-page__subtitle">
                Free forever. No credit card required.
              </p>
            </header>

            {/* Social signup */}
            <div className="signup-page__social">
              <button type="button" className="signup-page__social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button type="button" className="signup-page__social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="signup-page__divider">
              <span>or sign up with email</span>
            </div>

            <form className="signup-page__form" noValidate>

              {/* Name row */}
              <div className="signup-page__row">
                <div className="signup-page__field">
                  <label className="signup-page__label" htmlFor="firstName">First name</label>
                  <input
                    className="signup-page__input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Noor"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="signup-page__field">
                  <label className="signup-page__label" htmlFor="lastName">Last name</label>
                  <input
                    className="signup-page__input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ali"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              {/* Username */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="username">Username</label>
                <div className="signup-page__input-addon-wrap">
                  <span className="signup-page__input-addon">@</span>
                  <input
                    className="signup-page__input signup-page__input--addon"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="nooraliujjan"
                    autoComplete="username"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="email">Email address</label>
                <input
                  className="signup-page__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nooraliujan3@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="phone">
                  Phone number <span className="signup-page__optional">(optional)</span>
                </label>
                <input
                  className="signup-page__input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+92 300 0000000"
                  autoComplete="tel"
                />
              </div>

              {/* Password */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="password">Password</label>
                <div className="signup-page__input-eye-wrap">
                  <input
                    className="signup-page__input signup-page__input--eye"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Min. 8 characters"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    className="signup-page__eye-btn"
                    onClick={() => setShowPassword(v => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                <div className="signup-page__strength">
                  <span className="signup-page__strength-bar" data-level="1" />
                  <span className="signup-page__strength-bar" data-level="2" />
                  <span className="signup-page__strength-bar" data-level="3" />
                  <span className="signup-page__strength-bar" data-level="4" />
                </div>
              </div>

              {/* Confirm password */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="confirmPassword">Confirm password</label>
                <div className="signup-page__input-eye-wrap">
                  <input
                    className="signup-page__input signup-page__input--eye"
                    type={showConfirm ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    className="signup-page__eye-btn"
                    onClick={() => setShowConfirm(v => !v)}
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="signup-page__field">
                <label className="signup-page__label" htmlFor="role">I am a…</label>
                <select className="signup-page__input signup-page__select" id="role" name="role">
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Working professional</option>
                  <option value="educator">Educator / Teacher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Terms */}
              <label className="signup-page__checkbox-label">
                <input
                  className="signup-page__checkbox"
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  required
                />
                <span className="signup-page__checkbox-custom" />
                <span className="signup-page__checkbox-text">
                  I agree to the{' '}
                  <a href="/terms" className="signup-page__link">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="signup-page__link">Privacy Policy</a>
                </span>
              </label>

              <button
                type="submit"
                className="signup-page__submit-btn"
                disabled={!agreed}
              >
                Create my account
              </button>

            </form>

            <p className="signup-page__login-hint">
              Already a member?{' '}
              <a href="/login" className="signup-page__link">Log in</a>
            </p>

          </div>
        </main>
      </div>
    </div>
  );
}