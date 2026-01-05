import React from "react";
const CalendarCheck = () => <span className="text-3xl">📅</span>;
const FileText = () => <span className="text-3xl">📄</span>;
const AlertTriangle = () => <span className="text-3xl">🚨</span>;
const ShieldCheck = () => <span className="text-3xl">🛡️</span>;
const Globe = () => <span className="text-3xl">🌍</span>;
const Users = () => <span className="text-3xl">👥</span>;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">MediBridge</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#how" className="hover:text-blue-600">How It Works</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Simple, Accessible & Reliable Healthcare Coordination
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              MediBridge helps patients easily book appointments, understand medical documents,
              and access emergency support — without complexity.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100">
                Book Appointment
              </button>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Core Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CalendarCheck />}
              title="Easy Appointment Booking"
              description="View availability, book, reschedule, or cancel hospital appointments in a few simple steps."
            />
            <FeatureCard
              icon={<FileText />}
              title="Document Simplification"
              description="Upload medical documents and receive simplified, easy-to-understand explanations."
            />
            <FeatureCard
              icon={<AlertTriangle />}
              title="Emergency SOS"
              description="One-tap emergency alert with location sharing to registered hospitals or contacts."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">How MediBridge Works</h3>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <Step number="1" title="Create Profile" description="Register with basic personal information." />
            <Step number="2" title="Choose Service" description="Book appointments, upload documents, or use SOS." />
            <Step number="3" title="Stay Connected" description="Receive reminders, updates, and assistance." />
          </div>
        </div>
      </section>

      {/* Trust & Accessibility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <InfoCard icon={<ShieldCheck />} title="Secure & Ethical" text="No medical diagnosis. Data privacy and ethical AI usage." />
          <InfoCard icon={<Globe />} title="Accessible Design" text="Built for elderly and digitally inexperienced users." />
          <InfoCard icon={<Users />} title="Hospital Coordination" text="Improves communication between patients and institutions." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-white mb-3">MediBridge</h4>
            <p className="text-sm">Digital healthcare access & coordination platform.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Platform</h5>
            <ul className="space-y-2 text-sm">
              <li>Appointments</li>
              <li>Document Simplification</li>
              <li>Emergency SOS</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Legal</h5>
            <p className="text-sm">This platform does not provide medical diagnosis or treatment.</p>
          </div>
        </div>
        <div className="text-center text-xs border-t border-slate-700 py-4">
          © 2026 MediBridge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-blue-50 rounded-xl p-6 flex gap-4 items-start">
      <div className="text-blue-700">{icon}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}
