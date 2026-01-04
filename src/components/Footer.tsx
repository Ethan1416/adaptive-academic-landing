import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Adaptive Academic Learning Solutions</h3>
            <p className="text-gray-400 mb-4">
              Empowering learners worldwide with innovative exam preparation platforms. Our adaptive learning technology helps you achieve certification success.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://startpatriot.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartPatriot</a></li>
              <li><a href="https://startcomptia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartCompTIA</a></li>
              <li><a href="https://startielts.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartIELTS</a></li>
              <li><a href="https://startrealestatelicense.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartRealEstateLicense</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">More Platforms</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://starttoefl.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartTOEFL</a></li>
              <li><a href="https://startnclex.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartNCLEX</a></li>
              <li><a href="https://startgre.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">StartGRE</a></li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adaptive Academic Learning Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}