import React, { Children } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return <div className={className}>{children}</div>;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?:string
}
// const CardHeaderStyle = {
//   padding: "24px",
//   display: "flex",
//   flexDirection: "column",
//   gap: "6px",
// };

function CardHeader({ children,className }: CardHeaderProps) {
  return <div className={className}>{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
  className?:string
}

const CardContentStyle = {
  padding: "24px",
  "padding-top": "0px",
};

function CardContent({ children,className }: CardContentProps) {
  return <div style={CardContentStyle} className={className}>{children}</div>;
}
interface CardFooterProps {
  children: React.ReactNode;
  className?:string
}

const CardFooterStyle = {
  padding: "24px",
  "padding-top": "0px",
  width: "100%",
  display: "flex",
  "align-items": "center",
//   border: "1px solid",
//   "border-color": "#f1f5f9",
  "margin-top": "auto",
};

function CardFooter({ children,className }: CardFooterProps) {
  return <div style={CardFooterStyle} className={className}>{children}</div>;
}

export { Card, CardHeader, CardContent, CardFooter };
