export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful learners who have achieved their certification goals with our adaptive learning platforms.
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Choose Your Platform
        </a>
      </div>
    </section>
  );
}