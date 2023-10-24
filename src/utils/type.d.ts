import { Key } from "react";

export interface IId {
  id: string;
}
export interface IRightIcon {
  rightIcon?: ReactNode;
}
export interface IBg {
  bg: string;
}
export interface IColor {
  color: string;
}
export interface IOnClick {
  onClick?: any;
}
export interface IDisabled {
  disabled?: boolean;
}
export interface IClick extends IOnClick, IDisabled {}
export interface IDataTestId {
  dataTestId?: Key;
}
