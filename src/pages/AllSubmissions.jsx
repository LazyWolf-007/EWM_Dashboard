import Explorer from "../components/Explorer";
import { stats, submissions } from "../data";

export default function AllSubmissions() {
  return (
    <Explorer
      title="All Submissions"
      subtitle={`${stats.records} records, each with its materials listed and linked.`}
      items={submissions}
    />
  );
}
