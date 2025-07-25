export interface Medium {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string,
  list_page_visibility: boolean,
  text: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any[];
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface OldInfo {
  cat_id: number,
  course_id: number,
  platform: string,
  skills_cat_id: number,
  slug: string
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface IResponse {
  code: number,
  data: ProductData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any[],
  message: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any[],
  status_code: number
}
