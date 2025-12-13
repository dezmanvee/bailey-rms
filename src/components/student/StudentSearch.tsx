"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface StudentSearchProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: "all" | "completed" | "pending") => void;
}

export function StudentSearch({
  onSearch,
  onFilterChange,
}: StudentSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-6 rounded-2xl border-2 border-gray-100 bg-white p-6">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search by name or admission number..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="focus:border-oxblood-900 h-12 rounded-xl border-2 border-gray-200 pl-12"
          />
        </div>

        {/* Filter Select */}
        <Select onValueChange={(value: any) => onFilterChange(value)}>
          <SelectTrigger className="focus:border-oxblood-900 h-12 w-full rounded-xl border-2 border-gray-200 md:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Students</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
