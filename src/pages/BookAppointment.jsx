import React from "react";

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Book Appointment
      </h2>

      <form className="bg-white max-w-xl p-6 rounded-xl shadow space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Patient Name" />
        <input type="date" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Select Department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>General Medicine</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
