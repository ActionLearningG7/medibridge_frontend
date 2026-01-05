import { useState } from "react";
import { signup } from "../services/authservices";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(form);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-yellow-400 p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
      <label>Full Name:</label>
        <input 
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-xl  text-white"
          onChange={handleChange}
          required
        /><br></br><br></br>
      <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-xl"
          onChange={handleChange}
          required
        /><br></br><br></br>
      <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-xl"
          onChange={handleChange}
          required
        /><br></br><br></br>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}