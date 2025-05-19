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
  <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group shadow-sm hover:shadow-md">
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1">
        <h3 className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">
          {title}
        </h3>
        <p className={`text-3xl font-bold ${color || 'text-white'} mb-4`}>
          {value}
        </p>
        
        <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full ${progressColor} transition-all duration-500 ease-out`} 
            style={{ 
              width: `${Math.min(progressValue, 100)}%`,
              boxShadow: `0 0 8px 0 ${progressColor.replace('bg-', 'shadow-')}`
            }}
          ></div>
        </div>
      </div>
      
      <div className={`p-3 rounded-lg bg-gradient-to-br from-[#084040] to-[#0a2e2e] group-hover:from-[#0a2e2e] group-hover:to-[#084040] transition-all duration-300 shadow-inner`}>
        <div className="text-white text-xl">
          {icon}
        </div>
      </div>
    </div>
  </div>
);