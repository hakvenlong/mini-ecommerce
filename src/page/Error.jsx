// Error.tsx
import React from 'react';

const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'auto',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Responsive <picture> */}
      <picture>
        {/* 2× version for retina displays */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/568/878/non_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
          alt="404 – Page not found. A friendly robot is peeking out of space."
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
            display: 'block',
          }}
          loading="lazy"   // optional – improves page load
        />
      </picture>
    </div>
  );
};

export default Error;