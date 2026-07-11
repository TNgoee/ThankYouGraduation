import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';

// Sections
import { Splash } from '@/components/sections/Splash';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Gallery } from '@/components/sections/Gallery';
import { Appreciation } from '@/components/sections/Appreciation';
import { Celebrate } from '@/components/sections/Celebrate';
import { Footer } from '@/components/sections/Footer';
import { Letter } from '@/components/sections/Letter';

const queryClient = new QueryClient();

function MainContent() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Gallery />
      <Appreciation />
      <Letter />
      <Celebrate />
      <Footer />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {showSplash ? (
          <Splash onComplete={() => setShowSplash(false)} />
        ) : (
          <MainContent />
        )}
        <Toaster />
        <SonnerToaster position="bottom-right" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
