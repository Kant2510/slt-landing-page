import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import './EmailSignup.css';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim()) {
      setState('error');
      setErrorMsg('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setState('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setState('loading');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setState('success');
  };

  return (
    <div className="email-signup" id="email-signup">
      <div className="email-signup__inner">
        <AnimatePresence mode="wait">
          {state === 'success' ? (
            <motion.div
              className="email-signup__success"
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <CheckCircle2 size={32} color="#10b981" />
              <p className="email-signup__success-title">You're on the list.</p>
              <p className="email-signup__success-text">
                We'll let you know when we're ready.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="email-signup__form"
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <input
                className={`email-signup__input ${state === 'error' ? 'error' : ''}`}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === 'error') setState('idle');
                }}
                disabled={state === 'loading'}
                aria-label="Email address"
                id="email-input"
              />
              <button
                className="email-signup__button"
                type="submit"
                disabled={state === 'loading'}
                id="notify-button"
              >
                {state === 'loading' ? (
                  <Loader2 size={18} className="spin" />
                ) : (
                  'Notify Me'
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {state === 'error' && errorMsg && (
            <motion.p
              className="email-signup__error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              role="alert"
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
