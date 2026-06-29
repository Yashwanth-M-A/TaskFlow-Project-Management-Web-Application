export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface rounded-xl border border-border p-6 h-[400px] flex items-center justify-center text-textMuted">
          [ Recharts: Task Completion Rate Chart ]
        </div>
        <div className="bg-surface rounded-xl border border-border p-6 h-[400px] flex items-center justify-center text-textMuted">
          [ Recharts: Team Productivity Velocity ]
        </div>
      </div>
    </div>
  );
}
