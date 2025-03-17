export const CircularPercentage = ({ percentage }: { percentage: number }) => {
  const getColor = (percentage: number) => {
    if (percentage <= 33) return 'stroke-green-500'
    if (percentage <= 66) return 'stroke-yellow-500'
    return 'stroke-red-500'
  }
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="50%" cy="50%" r={radius} className="stroke-gray-200" strokeWidth="6" fill="transparent" />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className={`${getColor(percentage)} transition-all duration-500`}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className={`text-sm font-bold ${getColor(percentage)}`}>{percentage}%</span>
      </div>
    </div>
  )
}
