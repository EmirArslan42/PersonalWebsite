import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import { ThemeProvider } from 'next-themes'
export default function RootLayout({ title, description, children }) {
  return (
    <html lang="en"  style={{colorScheme: ""}} className="class">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />

        <link rel="icon" href="/favicon.ico" />
      </head>
       
      <body className="min-h-screen  antialiased font-montserrat px-3 relative z-10 overflow-hidden bg-primary-light dark:bg-gray-900 dark:text-white light:text-primary-dark">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        <div className="w-full ">
          <Header />
          {children}
        </div>
        </ThemeProvider>
        </body>
        
    </html>
  );
}
