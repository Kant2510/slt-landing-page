'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { subscribeNewsletter } from '@/app/actions/newsletter';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim()) {
      setState('error');
      setErrorMsg('Please enter your email address.');
      return;
    }

    setState('loading');

    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setSuccessMsg(res.message);
        setState('success');
      } else {
        setState('error');
        setErrorMsg(res.message);
      }
    } catch {
      setState('error');
      setErrorMsg('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative z-[1] py-4 w-full" id="email-signup">
      <div className="max-w-[480px] mx-auto text-center">
        <AnimatePresence mode="wait">
          {state === 'success' ? (
            <motion.div
              className="py-4 flex flex-col items-center gap-2"
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <CheckCircle2 size={32} className="text-emerald-500" />
              <p className="text-lg font-bold text-[#07111f]">You&apos;re on the list.</p>
              <p className="text-sm text-[#64748b] font-normal">
                {successMsg || "We'll let you know when we're ready."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="flex flex-col sm:flex-row gap-2.5 w-full mt-2"
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <input
                className={`flex-1 px-5 py-3.5 text-sm bg-white/70 border rounded-xl text-[#07111f] placeholder:text-[#64748b]/60 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 outline-none backdrop-blur-md transition-all duration-200 ${
                  state === 'error'
                    ? 'border-red-500 ring-1 ring-red-500'
                    : 'border-[#07111f]/30'
                }`}
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
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#07111f] hover:bg-[#152a45] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 min-w-[130px] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                type="submit"
                disabled={state === 'loading'}
                id="notify-button"
              >
                {state === 'loading' ? (
                  <Loader2 size={18} className="animate-spin" />
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
              className="text-xs text-red-500 mt-2 text-left pl-4"
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
