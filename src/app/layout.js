"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import NextTopLoader from "nextjs-toploader";
// export const metadata = {
//   title: "Portfolio ",
//   description: "Welcome to my personal portfolio website",
// };

export default function RootLayout({ title, description, children }) {
  const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          "One", // Types 'One'
          1000, // Waits 1s
          "Two", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Two Three", // Types 'Three' without deleting 'Two'
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    );
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfoli o" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <link rel="icon" href="/favicon.ico" />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="emirarslan"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </head>
      <body className="min-h-screen  antialiased font-montserrat px-3 relative z-10  ">
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <div className="w-full ">
            <Header />
            <NextTopLoader height={6} initialPosition={0.3} color="#5F7FFF" />
            <main>{children}</main>
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}

/**body de bg-white dark:bg-gray-900 dark:text-white */
