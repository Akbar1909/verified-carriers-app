import { ArrowDownIcon, ArrowUpIcon2 } from "@/components/SvgIcons";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { twMerge } from "tailwind-merge";

interface StatCardProps {
  className?: string;
  title:string;
}

const StatCard = ({ className, title }: StatCardProps) => {
  const {
    chartData,
    gradientId,
    strokeColor,
    value,
    isPositive,
    percentage,
  } = {
   
    value: 2420,
    percentage: 40,
    isPositive: true,
    strokeColor: "#00c853",
    gradientId: "greenGradient",
    chartData: [
      { value: 10 },
      { value: 15 },
      { value: 12 },
      { value: 20 },
      { value: 25 },
    ],
  };

  return (
    <article
      className={twMerge(
        "bg-white p-6 border drop-shadow-[0px_1px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)] border-gray-200 rounded-lg flex flex-col gap-6",
        className
      )}
    >
      <h3 className="text-md-medium text-gray-900">{title}</h3>

      <div className="flex items-center gap-4">
        <div className="flex-2 flex flex-col gap-4">
          <h3 className="text-d-md-semibold text-gray-900">2,420</h3>
          <div className="text-sm-medium flex items-center gap-2">
            <div className="flex items-center gap-1">
              <ArrowUpIcon2
                className={twMerge("[&_path]:stroke-success-500")}
              />{" "}
              <span className={twMerge("text-success-700")}>40%</span>{" "}
            </div>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>

        <div className="flex-1 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={strokeColor} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={strokeColor}
                fill={`url(#${gradientId})`}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </article>
  );
};

export default StatCard;
