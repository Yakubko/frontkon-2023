export interface Notification {
  id: number;
  text: string;
}

export interface LanguageContextValue {
  notifications: Notification[];
  addNotification: (text: string) => void;
}
