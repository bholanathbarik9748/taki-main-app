export interface AlertComponentProps {
  title: string;
  message: string;
  cancelText: string;
  okText?: string | undefined;
  closeAction?: () => void;
  okAction?: () => void;
}
