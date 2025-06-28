import { useForm } from "react-hook-form"; // Form manager
import { yupResolver } from "@hookform/resolvers/yup"; // Translator
import * as yup from "yup"; // Validation rules
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("Login data:", data);
    alert("Form submitted! Check the console.");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-indigo-300"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
