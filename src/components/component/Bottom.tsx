import { JSX, SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dXeATt8tbO7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="flex flex-col items-center p-6 space-y-4 bg-white">
        <div className="flex space-x-4">
          <a href="#" className="block p-2 bg-blue-100 rounded-md">
            <InstagramIcon className="w-6 h-6 text-blue-600" />
          </a>
          <a href="#" className="block p-2 bg-blue-100 rounded-md">
            <YoutubeIcon className="w-6 h-6 text-blue-600" />
          </a>
        </div>
        <h1 className="text-xl font-bold">MG FITNESS</h1>
        <p className="text-lg">COPENHAGEN, DENMARK</p>
        <a href="#" className="text-blue-600">
          kontakt@mariagad.dk
        </a>
        <div className="w-full h-1 bg-red-500 my-2" />
        <footer className="text-center text-sm text-muted-foreground">
          <p>© 2024 - Maria Gad | All rights reserved</p>
          <div className="flex justify-center space-x-2">
            <a href="#" className="text-blue-600">
              Handelsbetingelser
            </a>
            <span>|</span>
            <a href="#" className="text-blue-600">
              Datapolitik
            </a>
            <span>|</span>
            <a href="#" className="text-blue-600">
              Powered by Lenus.io
            </a>
          </div>
          <p>MGFITNESS | CVR: 40469117</p>
          <p>Margretheholmsvej 68, 6tv | 1432 København K | Danmark</p>
        </footer>
      </div>
    )
  }
  
  function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }