export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-border">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Built with <span className="font-medium">TypeScript</span>, <span className="font-medium">Next.js</span> & <span className="font-medium">Tailwind CSS</span>
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <a 
            href="https://github.com/A91y/Portfolio1.0"
            className="hover:text-foreground transition-colors font-medium"
          >
            View Source
          </a>
          <span>•</span>
          <a 
            href="https://github.com/A91y/Portfolio1.0/LICENSE"
            className="hover:text-foreground transition-colors"
          >
            MIT License
          </a>
          <span>•</span>
          <span>Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
