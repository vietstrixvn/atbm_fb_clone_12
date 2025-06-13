"use client";

import AdminLayout from "@/components/layout/admin.layout/layout";

import { useAuthStore } from "@/store/authStore";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AuthProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="bg-white">
      <AdminLayout>{children}</AdminLayout>;;
    </div>
  );
}
