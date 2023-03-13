import './globals.css'

export const metadata = {
  title: 'XAI Visualization',
  description: 'XAI for rank',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
