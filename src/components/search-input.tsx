"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchInputProps {
  placeholder?: string
  onSearch: (query: string) => void
  value?: string
}

export function SearchInput({ placeholder = "Search...", onSearch, value = "" }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearchTerm(newValue)
    onSearch(newValue)
  }

  const clearSearch = () => {
    setSearchTerm("")
    onSearch("")
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="pl-10 pr-10"
      />
      {searchTerm && (
        <Button
          variant="ghost"
          size="icon"
          onClick={clearSearch}
          className="absolute right-0 top-0 h-full px-3"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
