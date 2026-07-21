export default function ThemeScript() {
  const code = `
    try {
      var t = localStorage.getItem('forexdna-theme');
      if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
    } catch (e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
