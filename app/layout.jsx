import './styles.css'

export default function RootLayout({ children }) {
  console.log('page rendered')
  const date = new Date().toLocaleString()

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {date}</footer>
      </body>
    </html>
  )
}
