"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaMobile, FaWifi, FaBolt, FaTimes } from "react-icons/fa";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAFeatures = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  const features = [
    {
      icon: <FaMobile className="text-2xl text-blue-500" />,
      title: "Mobile App Experience",
      description: "Install as a native app on your device"
    },
    {
      icon: <FaWifi className="text-2xl text-green-500" />,
      title: "Offline Access",
      description: "Browse content even without internet"
    },
    {
      icon: <FaBolt className="text-2xl text-yellow-500" />,
      title: "Lightning Fast",
      description: "Instant loading and smooth performance"
    }
  ];

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Install App</h3>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        
        <p className="text-gray-300 text-sm mb-4">
          Get the best experience by installing our app on your device.
        </p>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {feature.icon}
              <div>
                <div className="text-white text-sm font-medium">{feature.title}</div>
                <div className="text-gray-400 text-xs">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleInstallClick}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
          >
            <FaDownload />
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PWAFeatures;