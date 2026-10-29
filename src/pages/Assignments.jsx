import Explorer from "../components/Explorer";
import { assignments } from "../data";

export default function Assignments() {
  return (
    <Explorer
      title="Assignments"
      subtitle="Coursework other than the standalone case studies. Search by title or file name."
      items={assignments}
      emptyLabel="No assignments match this search."
    />
  );
}
