export interface PortableTextChildModel {
  _type: string;
  _key?: string;
  text?: string;
  marks?: string[];
}

export interface PortableTextMarkDefModel {
  _type: string;
  _key: string;
  href?: string;
  newWindow?: boolean;
}

export interface PortableTextBlockModel {
  _type: string;
  _key?: string;
  style?: string;
  listItem?: string;
  level?: number;
  children: PortableTextChildModel[];
  markDefs?: PortableTextMarkDefModel[];
  asset?: {
    _ref?: string;
    url?: string;
  };
  alt?: string;
  caption?: string;
}
