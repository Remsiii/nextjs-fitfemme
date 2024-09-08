import { JSX, SVGProps } from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dXeATt8tbO7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div id="contact" className="flex flex-col items-center p-6 space-y-4 bg-white">
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/andreea/" className="block p-2 bg-blue-100 rounded-md">
            <InstagramIcon className="w-6 h-6 text-blue-600" />
          </a>
        </div>
        <h1 className="text-xl font-bold">Fit Femme</h1>
        <p className="text-lg">Oradea, Romania</p>
        <a href="#" className="text-blue-600">
          andreeamadasiu@gmail.com
        </a>
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