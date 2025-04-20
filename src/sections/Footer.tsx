import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return <section className='py-16'>
        <div className="container">
            <div className='flex flex-col items-center gap-6 md:justify-between md:flex-row'>
                <div>
                    <Image src={logoImage} alt='logo' />
                </div>
                <div>
                    <nav className='flex gap-6'>
                        {footerLinks.map(link => (
                            <Link key={link.label} href={link.href} className='text-white/50 text-sm'>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>;
}
