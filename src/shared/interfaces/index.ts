import type { ReactNode } from "react";
import type { MenuItemType } from "antd/es/menu/interface";

export interface MenuItem extends Omit<MenuItemType, "label" | "key" | "icon" | "children"> {
    key: string;
    label: string;
    icon?: ReactNode;
    children?: MenuItem[];
}