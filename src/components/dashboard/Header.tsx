"use client";

import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function Header({ title, description, action }: HeaderProps) {
  return (
    <div className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900">{title}</h1>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
export default Header;
