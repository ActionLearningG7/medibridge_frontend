import { useState } from "react";
import { login, saveToken } from "../services/authservices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      saveToken(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <input type="email"name="email"placeholder="Email"className="w-full mb-4 p-3 border rounded-xl"onChange={handleChange}required/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-xl"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}
