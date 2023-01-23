export interface Car {
  name: string;
  color: string;
  id?: number;
}

export enum PAGES {
  GARAGE = 'garage',
  WINNERS = 'winners',
}

export interface RaceData {
  velocity: number;
  distance: number;
}

export enum RaceStatus {
  START = 'started',
  STOP = 'stopped',
  DRIVE = 'drive',
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface DriveCheck {
  success: boolean;
}

export interface MergedData extends Winner {
  name: string;
  color: string;
}
