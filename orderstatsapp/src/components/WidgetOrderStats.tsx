import React from "react";
import OrderStat from "./OrderStat";
import styles from "../styles/styles.module.scss";

interface Stat {
  label: string;
  value: number;
  icon: string;
  arrow: string;
  percentage: number;
  bgColor?: string;
}

interface WidgetOrderStatsProps {
  stats: Stat[];
}

const WidgetOrderStats: React.FC<WidgetOrderStatsProps> = ({ stats }) => {
  return (
    <div className={styles.widget}>
      {stats.map((stat, index) => (
        <OrderStat
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          arrow={stat.arrow}
          percentage={stat.percentage}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
