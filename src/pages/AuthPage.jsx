import React, { useState } from 'react';
import { X, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AuthPage({ initialMode = 'login', onClose, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Student');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess({
        name: fullName || 'Aarav Sharma',
        email: email || 'student@triton-edu.org',
        role
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-6 sm:p-10">
      <div className="bg-[#0e0e12] border border-white/20 rounded-2xl w-full max-w-xl p-8 sm:p-14 md:p-16 shadow-2xl relative text-white font-sans space-y-10">
        
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="text-center space-y-2">
          <span className="font-mono text-2xl font-bold tracking-[0.2em] uppercase text-white block">
            TRITON<span className="text-white/40">.</span>
          </span>
          <p className="label-mono text-white/50 tracking-wider text-xs">
            {mode === 'login' ? 'STUDENT PORTAL LOGIN' : 'CREATE STUDENT ACCOUNT'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {mode === 'register' && (
            <div>
              <label className="label-mono text-white/50 block mb-3">FULL NAME</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="editorial-input"
                placeholder="e.g. Aarav Sharma"
              />
            </div>
          )}

          <div>
            <label className="label-mono text-white/50 block mb-3">EMAIL ADDRESS</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="editorial-input"
              placeholder="student@example.com"
            />
          </div>

          <div>
            <label className="label-mono text-white/50 block mb-3">PASSWORD</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="editorial-input"
              placeholder="••••••••••••"
            />
          </div>

          <div>
            <label className="label-mono text-white/50 block mb-3">ACCOUNT TYPE</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-transparent border-b border-white/20 text-white font-sans text-base py-3 w-full outline-none cursor-pointer"
            >
              <option value="Student" className="bg-[#070709]">Prospective Student</option>
              <option value="Parent" className="bg-[#070709]">Parent / Sponsor</option>
              <option value="Advisor" className="bg-[#070709]">Education Counselor</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-pill-white w-full text-center justify-center !py-4"
            >
              <span>{mode === 'login' ? 'SIGN IN TO PORTAL' : 'CREATE ACCOUNT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="pt-8 border-t border-white/10 text-center font-mono text-xs text-white/60">
          {mode === 'login' ? (
            <p>
              Don't have a portal account?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-white underline font-bold bg-transparent border-none cursor-pointer ml-1"
              >
                Register Here
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-white underline font-bold bg-transparent border-none cursor-pointer ml-1"
              >
                Sign In
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
