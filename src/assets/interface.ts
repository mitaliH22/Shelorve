export interface Framework {
  frameworksID: number;
  frameworksName: string;
  frameworksDescription: string;
}

export interface Assessment {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  rating: string;
  controlsCount: number;
  notStarted: number;
}