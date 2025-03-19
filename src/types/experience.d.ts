export interface BulletItem {
    [indentLevel: string]: string[];
  }
  
  export interface ExperienceItem {
    companyName: string;
    title: string;
    startDate: Date;
    endDate?: Date | null;
    bullets: BulletItem[];
  }
  