"use client"; // tem interatividade com o usuário, adicionando interatividade com o usuário

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Buscar por uma especialidade ou médico..." />
      <Button variant="default" size="icon">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export default Search;
