import RootLayout from "@/components/layout/RootLayout";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button, TextField } from "@radix-ui/themes";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginWithCredentials() {
    try {
      const credentials = {
        username: username,
        password: password,
      };

      // Sign in using the 'credentials' provider
      await signIn("credentials", {
        username: credentials.username,
        password: credentials.password,
        redirect: true,
        callbackUrl: "/add-new-note",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RootLayout>
      <div className="container mx-auto flex items-center justify-center">
        <div className="py-20">
          <h3 className="text-2xl text-blue-800 text-center mb-5 font-semibold">
            Please Login
          </h3>
          <div className="p-10 bg-slate-400 rounded-md">
            <h6 className="text-lg text-white">Username</h6>
            <TextField.Input
              size="3"
              placeholder="Your Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <h6 className="text-lg text-white mt-3">Password</h6>
            <TextField.Input
              size="3"
              type="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="flex items-center justify-center mt-3">
              <Button onClick={loginWithCredentials}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
