export default function PageLayout({
  label,
  title,
  description,
  generatedAt,
  children
}) {
  return (
    <main className="container">
      <header className="pageHeader">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {generatedAt && <p className="generated">Generated at: {generatedAt}</p>}
      </header>

      {children}
    </main>
  );
}
