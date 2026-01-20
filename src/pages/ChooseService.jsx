import React from "react";
export default function ChooseService() {
return (
<div className="min-h-screen bg-slate-50 p-8">
<h2 className="text-3xl font-bold text-blue-700 mb-6">Choose Service</h2>
<div className="grid md:grid-cols-3 gap-6">
<ServiceCard title="Book Appointment" desc="Schedule hospital visits easily" />
<ServiceCard title="Upload Documents" desc="Simplify medical reports" />
<ServiceCard title="Emergency SOS" desc="Immediate emergency assistance" />
</div>
</div>
);
}


function ServiceCard({ title, desc }) {
return (
<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
<h4 className="text-lg font-semibold mb-2">{title}</h4>
<p className="text-sm text-slate-600 mb-4">{desc}</p>
<button className="text-blue-600 font-medium">Proceed →</button>
</div>
);
}