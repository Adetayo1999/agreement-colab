import { StaticImageData } from "next/image";

export interface IconType {
  scale?: number;
  color?: string;
}

export interface InputType {
  type: "text" | "email" | "password";
  placeholder: string;
  name: string;
  Icon?({ color, scale }: IconType): JSX.Element;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AgreementDataType {
  id: number;
  name: string;
  status: "pending" | "rejected" | "accepted";
  phone: string;
  amount: number;
  agreement: string;
  currency: string;
}

export interface LabelProps {
  labelName: string;
  inputName: string;
}

export interface SignButtonProps {
  Icon: (({ color, scale }: IconType) => JSX.Element) | StaticImageData;
  text?: string;
}

export interface ModalTypes {
  isCreateAgreementOpen: boolean;
  toggleCreateAgreement: () => void;
  isSignAgreementOpen: boolean;
  toggleSignAgreement: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export interface AuthTypes {
  isAuthenticated: boolean;
  setAuthState(status: boolean): void;
}
