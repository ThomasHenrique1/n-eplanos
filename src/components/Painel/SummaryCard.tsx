import { ReactNode } from 'react';

export const SummaryCard = ({
  title,
  value,
  icon,
  color,
  progressValue,
  progressColor
}: {
  title: string;
  value: number | string;
  icon: ReactNode;
  color?: string;
  progressValue: number;
  progressColor: string;
}) => (
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-[#A1A6A2] text-sm font-medium mb-1">{title}</h3>
        <p className={`text-3xl font-bold ${color || ''}`}>{value}</p>
      </div>
      <div className="bg-[#084040] p-3 rounded-lg">
        {icon}
      </div>
    </div>
    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
      <div 
        className={`h-full ${progressColor}`} 
        style={{ width: `${Math.min(progressValue, 100)}%` }}
      ></div>
    </div>
  </div>
);