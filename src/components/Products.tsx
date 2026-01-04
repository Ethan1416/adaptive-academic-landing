const products = [
  {
    name: "StartPatriot",
    description: "ASVAB military entrance exam preparation with comprehensive practice tests, study guides, and score improvement strategies.",
    url: "https://startpatriot.com",
    category: "Military",
    color: "from-red-500 to-blue-600",
  },
  {
    name: "StartCompTIA",
    description: "IT certification prep for A+, Network+, Security+, and more. Master technical concepts with hands-on practice.",
    url: "https://startcomptia.com",
    category: "IT Certification",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "StartIELTS",
    description: "Complete IELTS preparation covering Reading, Writing, Listening, and Speaking with band score predictions.",
    url: "https://startielts.com",
    category: "English Proficiency",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "StartRealEstateLicense",
    description: "State-specific real estate exam prep with practice questions, flashcards, and licensing guidance.",
    url: "https://startrealestatelicense.com",
    category: "Professional License",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "StartTOEFL",
    description: "TOEFL iBT preparation with full-length practice tests, speaking exercises, and writing feedback.",
    url: "https://starttoefl.com",
    category: "English Proficiency",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "StartNCLEX",
    description: "NCLEX-RN and NCLEX-PN exam preparation with adaptive practice questions and detailed rationales.",
    url: "https://startnclex.com",
    category: "Nursing",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "StartGRE",
    description: "GRE preparation covering Verbal, Quantitative, and Analytical Writing with score improvement strategies.",
    url: "https://startgre.com",
    category: "Graduate Admission",
    color: "from-violet-500 to-purple-600",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Learning Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our suite of specialized exam preparation platforms, each designed with adaptive learning technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${product.color}`} />
              <div className="p-6">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  Visit Platform
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
