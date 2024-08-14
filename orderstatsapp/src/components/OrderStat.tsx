import React from "react";
import styles from "../styles/styles.module.scss";
import * as FaIcons from "react-icons/fa";

interface OrderStatProps {
  label: string;
  value: number;
  icon?: string;
  arrow?: string;
  percentage?: number;
  bgColor?: string;
}

const OrderStat: React.FC<OrderStatProps> = ({
  label,
  value,
  icon,
  arrow,
  percentage,
  bgColor,
}) => {
  const IconComponent = icon ? FaIcons[icon as keyof typeof FaIcons] : null;
  const ArrowComponent = arrow ? FaIcons[arrow as keyof typeof FaIcons] : null;
  const arrowBackgroundColor = arrow === "FaArrowUp" ? "#28a745" : "#dc3545";
  return (
    <div className={styles.stat}>
      <div className={styles.labeldiv}>
        <div className={styles.label}>{label}</div>
        <div style={{ color: arrowBackgroundColor }}>
          {ArrowComponent && <ArrowComponent className={styles.arrow} />}
          {percentage !== undefined && (
            <span className={styles.percentage}>{percentage}%</span>
          )}
        </div>
      </div>
      <div className={styles.icondiv}>
        <div className={styles.icon} style={{ backgroundColor: bgColor }}>
          {IconComponent && <IconComponent />}{" "}
        </div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
};

export default OrderStat;
