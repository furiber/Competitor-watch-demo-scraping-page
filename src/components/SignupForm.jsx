import React, { useState } from 'react';
import { CheckCircleIcon } from './Icons';

const API_URL = import.meta.env.VITE_API_URL ?? 'https://app.coffeeroulette.com/api/org-requests';

export function SignupForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    contactEmail: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        return;
      }

      if (res.status === 409) {
        setErrorMessage("We already have a request from this address — we'll be in touch.");
      } else if (res.status === 400) {
        setErrorMessage('Please check all required fields and try again.');
      } else {
        setErrorMessage('Something went wrong on our end. Please try again in a moment.');
      }
      setStatus('error');
    } catch {
      setErrorMessage('Unable to reach the server. Please check your connection and try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="alert" aria-live="polite">
        <div className="form-success-icon">
          <CheckCircleIcon />
        </div>
        <h3>You're on the list!</h3>
        <p>
          Thanks! We've received your request and will review it shortly.<br />
          You'll get an email invite once approved.
        </p>
      </div>
    );
  }

  return (
    <form
      id="signup-form"
      className="signup-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="orgName">Organisation name <span className="required">*</span></label>
          <input
            id="orgName"
            name="orgName"
            type="text"
            placeholder="e.g. Acme Engineering"
            value={formData.orgName}
            onChange={handleChange}
            required
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Your name <span className="required">*</span></label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            placeholder="e.g. Jane Smith"
            value={formData.contactName}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contactEmail">Your email <span className="required">*</span></label>
        <input
          id="contactEmail"
          name="contactEmail"
          type="email"
          placeholder="jane@acme.com"
          value={formData.contactEmail}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <span className="form-hint">We'll send your invite link here once approved.</span>
      </div>

      <div className="form-group">
        <label htmlFor="message">Anything to add? <span className="optional">(optional)</span></label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder='e.g. "We have 50 people across 3 teams."'
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <div className="form-error" role="alert" aria-live="assertive">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {errorMessage}
        </div>
      )}

      <button
        id="signup-submit"
        type="submit"
        className="btn btn-primary form-submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className="spinner" aria-hidden="true"></span>
            Sending request…
          </>
        ) : (
          'Request Early Access'
        )}
      </button>
    </form>
  );
}
