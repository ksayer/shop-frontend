export interface PaginatedAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export interface ImageObject {
  id: string;
  image: ImageData;
}

export interface ImageData {
  id: string | number;
  absolute_url: string;
  width: number;
  height: number;
  optimized: boolean;
}
