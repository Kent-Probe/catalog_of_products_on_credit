export type ProductsType = {
  id: string | number;
  brand: string;
  model: string;
  rear_camera_mp: number;
  front_camera_mp: number;
  rom_memory_gb: number;
  ram_memory_gb: number;
  processor: string;
  screen_inches: number;
  battery_mah: number;
  financials: string[];
  savings: number;
  installments: { quantity: number; price: number }[];
  isVisible: boolean;
  initial: number;
  image: string;
};
