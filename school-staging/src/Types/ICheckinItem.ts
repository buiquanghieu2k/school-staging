export interface ICheckinItem {
  roomId: string;
  subjectId: string;
  classId: string;
  teacher: string;
  startTime: string;
  endTime: string;
  isCheckedIn: boolean;
  periodNumber: number;
  subjectName?: string;
}
