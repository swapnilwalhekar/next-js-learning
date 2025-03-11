import Card from "@/app/components/card";
import Link from "next/link";

export default function DefaultArchived() {
  return (
    <Card>
      <div>Archived Notificatios</div>
      <Link href="/complex-dashboard/">Default</Link>
    </Card>
  );
}
