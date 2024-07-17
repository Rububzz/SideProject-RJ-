import LoginInterface from "../Components/LoginInterface";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-4xl font-bold mb-8">Login Page</p>
      <LoginInterface></LoginInterface>
    </div>
  );
}

export default LoginPage;
