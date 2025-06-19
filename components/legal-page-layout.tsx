import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-semibold prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
