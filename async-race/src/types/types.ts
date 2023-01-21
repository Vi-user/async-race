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
