export interface Specialty {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Updated type for the icon
  link: string;
  subtext: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: any; // Updated type for the icon
}
