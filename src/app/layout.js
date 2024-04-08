import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/footer';
import { Providers } from '../store/Provider.jsx'


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Massurance',
  icons: { icon: "/logo_.ico" },
  description: 'Massurance - Un site web d\'assurance proposant une gamme complète de services d\'assurance pour répondre aux besoins divers de nos clients. Avec une expérience de plus de 40 ans dans le domaine de l\'assurance, Massurance s\'engage à offrir des solutions personnalisées et une tranquillité d\'esprit totale. Explorez nos projets, découvrez nos services et trouvez la couverture parfaite pour protéger ce qui compte le plus pour vous. Faites confiance à Massurance pour assurer votre avenir.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#000815] from-10% via-[#131440] via-40% to-[#000815] to-90% ... overflow-x-hidden`} >
        <Providers >
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

