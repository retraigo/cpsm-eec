import { Head } from "$fresh/runtime.ts";
import Cert from "../islands/Cert.tsx";
export default function Home() {
  return (
    <div class="p-4 flex flex-col space-y-8 mx-auto max-w-screen-md">
      <Head>
        <title>Certificates | Promoting Career on Social Media</title>
      </Head>
      <img
        src="/icon.png"
        class="w-32 h-32 mx-auto"
        alt="Easwari Engineering College"
      />
      <div class="text-center flex flex-col items-center space-y-0.5">
        <div class="font-semibold text-xl text-red-500 font-montserrat">
          Easwari Engineering College (Autonomous)
        </div>
        <div class="font-bold text-2xl text-purple-500">
          Department of Artificial Intelligence & Data Science
        </div>
        <div class="font-bold text-blue-500 transition transform duration-500 ease-in-out hover:scale-110 text-2xl">
        Promoting Career on Social Media
        </div>
        <div class="font-bold text-2xl tracking-wider text-purple-700">
        Download Certificates
        </div>
      </div>
      <Cert />
      {
        /*
          <div class="text-2xl font-semibold text-center">
          This website is temporarily down until 26th of October due to an issue with the event date
          displayed on the certificate.
          </div>
         */
      }
    </div>
  );
}
