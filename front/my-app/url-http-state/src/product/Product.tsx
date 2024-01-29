import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ButtonDelete } from "@/buttonAction/btnDelete";
import { ButtonEdit } from "@/buttonAction/btnEdit";
import { Button } from "@/components/ui/button";

export default function FormProduct() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4">
      <form className="">
        
      </form>

      <div className="flex items-center justify-between">
        <Button variant="default"> Novo Produto</Button>
      </div>

      <div className="border rounded">
        <Table>
          <TableCaption>Lista de todos os produtos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Código</TableHead>
              <TableHead className="w-[600px]">Descrição</TableHead>
              <TableHead className="w-[230px]">Preço</TableHead>
              <TableHead className="text-left">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">0001</TableCell>
              <TableCell>PNEU</TableCell>
              <TableCell>R$ 100,00</TableCell>
              <TableCell className="text-right space-x-3">
                <ButtonEdit />
                <ButtonDelete />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
