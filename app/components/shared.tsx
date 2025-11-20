import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="backdrop-blur">
    {children}
  </Badge>
);

export const SectionCard = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
      {subtitle ? (
        <CardDescription className="text-sm text-slate-500">
          {subtitle}
        </CardDescription>
      ) : null}
    </CardHeader>
    <CardContent className="pt-0">{children}</CardContent>
  </Card>
);
