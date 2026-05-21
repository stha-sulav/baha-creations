import { Button } from "@/feat/shared/components/ui/button";

type HeaderCtaProps = {
  label?: string;
  className?: string;
};

export function HeaderCta({ label = "Let's Talk", className }: HeaderCtaProps) {
  return <Button className={className}>{label}</Button>;
}
