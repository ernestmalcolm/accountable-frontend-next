import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  console.log(fullname);
  console.log(email);
  console.log(password);

  const handleRegister = () => {
    try {
      axios({
        method: "post",
        url: "http://localhost:3000/v1/users",
        data: {
          name: fullname,
          email: email,
          password: email,
          role: "user",
        },
      });

      router.push("/pages/login");
    } catch (e) {
      window.alert("Error");
      console.log(e);
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="/">
                <span className="sr-only">Home</span>
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Accountable
              </h1>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="mt-1 w-full h-10 ring-2 ring-teal rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(event) => setFullname(event.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    className="mt-1 w-full h-10 ring-2 ring-teal rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    className="mt-1 w-full h-10 ring-2 ring-teal rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block bg-teal shrink-0 rounded-md px-12 py-3 text-sm font-medium text-[#ffffff] transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    onClick={handleRegister}
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a
                      href="/pages/register"
                      className="text-gray-700 underline"
                    >
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
