import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About KITE Tuition Center',
  description: 'Learn more about KITE Tuition Center and our approach to holistic education.'
};

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About KITE Tuition Center</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 mb-8">
          Empowering students through innovative learning experiences and personalized education.
        </p>
      </section>

      {/* Life at KITE Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Life at KITE: Events That Spark Joy & Growth</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We believe that learning goes far beyond the classroom. Here&apos;s how we make education more holistic, fun, and unforgettable:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Star Quest */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-3">Star Quest</h3>
            <p className="text-gray-600">
              Our signature games competition is a thrilling mix of physical, logical, and creative challenges where students sharpen their mental agility and problem-solving skills.
            </p>
          </div>

          {/* Sports Day */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🏃</div>
            <h3 className="text-xl font-semibold mb-3">Sports Day</h3>
            <p className="text-gray-600">
              Energetic races, outdoor games, and team challenges that promote fitness, discipline, and team spirit for students of all interests.
            </p>
          </div>

          {/* Ethnic Day */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold mb-3">Ethnic Day</h3>
            <p className="text-gray-600">
              A celebration of cultural diversity where students proudly share their heritage through traditional attire, performances, and storytelling.
            </p>
          </div>

          {/* Quiz Competitions */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-3">Quiz Competitions</h3>
            <p className="text-gray-600">
              Regular academic challenges that test knowledge, encourage quick thinking, and reward the sharpest minds.
            </p>
          </div>

          {/* Educational Trips */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-3">Educational Trips</h3>
            <p className="text-gray-600">
              Real-world learning experiences through visits to science centers, historical sites, and nature parks that spark curiosity and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Teaching Philosophy: Learn Better, Grow Stronger</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We understand that no two students are alike. That&apos;s why at KITE, our teaching is customized, interactive, and student-centered.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Individual Attention */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">👤</span> Individual Attention
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Small batch sizes for personalized learning</li>
                <li>Tailored teaching approaches for each student</li>
                <li>One-on-one mentoring available</li>
              </ul>
            </div>

            {/* Smart Learning Tools */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">💡</span> Smart Learning Tools
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Digital boards and animated lessons</li>
                <li>Visual learning aids for complex topics</li>
                <li>Engaging teaching styles to maintain interest</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Continuous Evaluation */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">📊</span> Continuous Evaluation
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Regular tests and assessments</li>
                <li>Monthly progress reports for parents</li>
                <li>Targeted revision for weak areas</li>
              </ul>
            </div>

            {/* Structured Curriculum */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-blue-600 mr-2">📚</span> Structured Curriculum
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Well-planned weekly lessons</li>
                <li>Time-bound completion of topics</li>
                <li>Exam strategy sessions for board students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
