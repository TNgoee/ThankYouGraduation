export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-primary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-xl">🎓</span>
        </div>
        
        <p className="font-serif text-lg text-foreground/80 mb-4 italic max-w-xl mx-auto">
          "Made with gratitude, determination, and unforgettable memories."
        </p>
        
        <div className="text-sm text-muted-foreground tracking-wider uppercase">
          &copy; 2026 Graduation Celebration
        </div>
      </div>
    </footer>
  );
}
