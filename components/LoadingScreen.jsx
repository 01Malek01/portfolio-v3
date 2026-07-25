'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDisplay = new Promise((resolve) => setTimeout(resolve, 1200));
    const pageReady = new Promise((resolve) => {
      const waitForJS = (cb) => {
        requestAnimationFrame(() => setTimeout(cb, 150));
      };
      if (document.readyState === 'complete') {
        waitForJS(resolve);
      } else {
        window.addEventListener('load', () => waitForJS(resolve), { once: true });
      }
    });

    Promise.all([minDisplay, pageReady]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-apple-950"
      style={{ animation: 'loadingFadeOut 0.8s 1.2s both' }}
    >
      <div
        className="w-16 h-16 rounded-full border-2 border-purple-400/30 border-t-purple-400"
        style={{ animation: 'loadingSpin 2s linear infinite' }}
      />
      <p
        className="mt-6 text-apple-300 text-sm tracking-widest uppercase"
        style={{ animation: 'heroFade 0.6s 0.3s both' }}
      >
        Loading experience
      </p>
    </div>
  );
}
