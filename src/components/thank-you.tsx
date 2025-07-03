const ThankYouPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-3xl sm:text-5xl font-bold text-emerald-600 mb-4">
          Thank you!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your message has been submitted successfully.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all"
        >
          Go back home
        </a>
      </div>
    </section>
  );
};

export default ThankYouPage;
