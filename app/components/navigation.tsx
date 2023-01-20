import Image from "next/image";
import Link from "next/link";


function Navigation() {
    return ( 
    <div className="flex border border-black lg:px-32 justify-between text-xl">
        <div></div>
        <div className="flex ">
            <Link href="/work" className="block py-8 px-4">WORK</Link>
            <Link href="/services" className="block py-8 px-4">SERVICES</Link>
            <Link href="/pricing" className="block py-8 px-4">PRICING</Link>
            <Link href="/for-startups" className="block py-8 px-4 text-gradient-1">FOR STARTUPS</Link>
            <Link href="/contact-us" className="block py-8 px-4">CONTACT US</Link>
        </div>
    </div> 
    );
}

export default Navigation;