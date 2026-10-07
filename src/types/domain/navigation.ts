export interface NavigationItemModel {
  label: string;
  href: string;
  children?: NavigationItemModel[];
}

export interface NavigationModel {
  primary: NavigationItemModel[];
  footer: NavigationItemModel[];
}
