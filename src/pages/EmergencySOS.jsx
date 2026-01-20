import React from "react";

export default function EmergencySOS() {
return (
<div className="min-h-screen bg-red-50 flex flex-col items-center justify-center">
<h2 className="text-3xl font-bold text-red-700 mb-4">Emergency SOS</h2>
<p className="mb-6 text-slate-700">Tap below to send an emergency alert with your location.</p>
<button className="bg-red-600 text-white text-xl px-10 py-4 rounded-full shadow-lg animate-pulse">
🚨 SOS
</button>
</div>
);
}