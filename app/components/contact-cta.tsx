import Link from "next/link";

function Contact() {
  return (
    <div className="lg:px-32 lg:py-32 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-sans text-8xl text-center">Give us a holla by</h1>
        <h1 className="font-sans text-8xl text-center mt-2">clicking here!</h1>
      </div>
      <Link href={'/contact-us'} className="text-3xl px-14 py-4  mt-16 bg-gradient-1 rounded-md text-white">Contact</Link>
    </div>
  );
}

export default Contact;
