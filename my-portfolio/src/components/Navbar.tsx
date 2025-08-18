// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 border-b border-border-muted flex justify-between items-center">
      <h1 className="text-xl font-heading text-accent-primary">Andrea Naranjo Lima</h1>
      <nav className="space-x-6 text-sm font-medium text-text-secondary">
        <a href="#about" className="hover:text-accent-primary">About</a>
        <a href="#projects" className="hover:text-accent-primary">Projects</a>
        <a href="#contact" className="hover:text-accent-primary">Contact</a>
      </nav>
    </header>
  )
}