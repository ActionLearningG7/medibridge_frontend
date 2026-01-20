import React from "react";

export default function CreateProfile() {
return (
<div className="min-h-screen bg-slate-50 p-8">
<h2 className="text-3xl font-bold text-blue-700 mb-6">Create Profile</h2>
<form className="bg-white max-w-xl p-6 rounded-xl shadow space-y-4">
<input className="w-full border p-2 rounded" placeholder="Full Name" />
<input type="number" className="w-full border p-2 rounded" placeholder="Age" />
<input className="w-full border p-2 rounded" placeholder="Contact Number" />
<textarea className="w-full border p-2 rounded" placeholder="Medical History" />
<button className="bg-blue-600 text-white px-4 py-2 rounded">Save Profile</button>
</form>
</div>
);
}