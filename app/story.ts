import {Resource} from "./resource";

export class Story {
  modelId: string;
  name: string;
  title: string;
  status: string;
  openDays: number;
  devDays: number;
  qaDays: number;
  resolvedBy: Resource;
  createdBy: Resource;
}
