export type Struct<V = any> = Record<string, V>;

export interface CommonFields {
  id: string;
  created_at: string | Date;
  updated_at: string | Date;
}
