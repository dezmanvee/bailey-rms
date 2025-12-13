"use client";

import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center">
      <Settings className="mx-auto mb-4 h-16 w-16 text-gray-400" />
      <h3 className="mb-2 text-xl font-semibold text-gray-900">Coming Soon</h3>
      <p className="text-gray-600">System settings will be available here.</p>
    </div>
  );
}
