import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (key: string, value: string) => void;
}

export default function FilterBar({ onSearch, onFilterChange }: FilterBarProps) {
  return (
    <div className="w-full bg-card p-4 rounded-xl shadow-sm border space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search tutorials..." 
          className="pl-9 bg-background"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        <Select onValueChange={(val) => onFilterChange('category', val)}>
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Vegetables">Vegetables</SelectItem>
            <SelectItem value="Composting">Composting</SelectItem>
            <SelectItem value="Pest Control">Pest Control</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => onFilterChange('difficulty', val)}>
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Level</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="icon" className="shrink-0">
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
