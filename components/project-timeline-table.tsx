import type React from "react"

interface TimelinePhase {
  name: string
  duration: string
}

const ProjectTimelineTable: React.FC = () => {
  const phases: TimelinePhase[] = [
    { name: "Wireframe Phase", duration: "2 weeks" },
    { name: "Art Direction", duration: "1 week" },
    { name: "Design Phase", duration: "7 weeks" },
    { name: "Development Phase", duration: "24 weeks" },
    { name: "Testing", duration: "2 weeks" },
    { name: "Warranty Period", duration: "30 days" },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="py-3 px-4 text-left font-semibold w-2/3">Project Phase</th>
            <th className="py-3 px-4 text-left font-semibold w-1/3">Duration</th>
          </tr>
        </thead>
        <tbody>
          {phases.map((phase, index) => (
            <tr key={phase.name} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="py-3 px-4 border-t">{phase.name}</td>
              <td className="py-3 px-4 border-t">{phase.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTimelineTable
