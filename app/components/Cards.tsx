import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Progress } from "@nextui-org/progress";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Cards() {
  return (
    <Card className="p-2">
      <CardHeader className="flex aspect-square w-full items-center justify-center">
        <Image alt="images" className="rounded-xl" src={logo} />
      </CardHeader>
      <CardBody className="flex-col items-start px-4 pb-0 pt-2">
        <h3 className="text-xl font-bold">Nama Proyek</h3>
        <p className="text-lg">Pembuat Proyek</p>
        <Progress aria-label="Loading..." value={70} className="max-w-md"/>
        <p className="text-lg">Dana Terkumpul</p>
        <p className="text-sm">Sisa hari</p>
      </CardBody>
    </Card>
  );
}
