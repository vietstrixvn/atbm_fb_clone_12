"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { LogOut, Eye, EyeOff, Copy, Check, Search, Users } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

type Admin = {
  _id: string;
  username: string;
  password: string;
  createdAt: string;
};

type AdminData = {
  result: Admin[]; // <-- changed from `results`
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  });

const Pages = () => {
  const { logout } = useAuthStore();

  const [adminData, setAdminData] = useState<AdminData>({
    result: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>(
    {}
  );
  const [copiedField, setCopiedField] = useState("");

  const togglePassword = (id: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = async (id: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(id);
    setTimeout(() => setCopiedField(""), 1000);
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/account", {
          method: "GET",
        });
        const data = await response.json();
        setAdminData(data);
      } catch (error) {
        console.error("Failed to fetch account:", error);
      }
    };

    fetchAccount();
  }, []);

  const filteredData =
    adminData.result?.filter((admin) => {
      const term = searchTerm.toLowerCase();
      return admin.username.toLowerCase().includes(term);
    }) ?? [];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mb-6 flex justify-between items-center">
        <Button
          onClick={logout}
          variant="outline"
          className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
          </Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage system administrators and monitor login sessions
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-black">Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by username, IP address, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-black"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-black">
              <span>Administrator Accounts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table className="text-black">
                <TableHeader className="text-black">
                  <TableRow className="text-black">
                    <TableHead className="text-black">Username</TableHead>
                    <TableHead className="text-black">Password</TableHead>

                    <TableHead className="text-black">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((admin) => (
                    <TableRow key={admin._id}>
                      <TableCell>
                        <div className="font-semibold text-blue-600">
                          {admin.username}
                        </div>
                        <div className="text-xs font-mono">
                          {admin._id.slice(0, 8)}...
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm">
                            {showPasswords[admin._id]
                              ? admin.password
                              : "••••••••"}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => togglePassword(admin._id)}
                            className="h-6 w-6 p-0"
                          >
                            {showPasswords[admin._id] ? (
                              <EyeOff className="h-3 w-3" />
                            ) : (
                              <Eye className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {formatDate(admin.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(admin._id, admin._id)}
                          className="h-6 w-6 p-0"
                          title="Copy ID"
                        >
                          {copiedField === admin._id ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pages;
