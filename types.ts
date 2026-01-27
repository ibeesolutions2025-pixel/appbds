export enum AppType {
  BRANDING = 'BRANDING',
  TOWNHOUSE = 'TOWNHOUSE',
  LAND = 'LAND'
}

export type AspectRatio = '9:16' | '16:9' | '1:1';

export interface AppConfig {
  id: AppType;
  label: string;
  icon: string;
  description: string;
  themeColor: string;
  themeBg: string;
}

// === SCENE DATA (Shared by Land & Townhouse) ===
export interface SceneData {
  id: number;
  title: string;
  script: string;
  visualPrompt: string;
  veoPrompt?: string; // Added for Townhouse & Land
  imageBase64?: string | null;
  isLoadingImage?: boolean;
  // Regeneration States
  isEditing?: boolean;
  feedback?: string;
}

export interface ProjectInfo {
  description: string;
  utilities: string;
  cta: string;
}

// === BRANDING APP TYPES ===
export interface BrandingVariation {
  id: number;
  title: string;
  script: string;
  veoPrompt: string;
}

export interface BrandingResult {
  hookHeadline: string; // NEW: Catchy Title
  hashtags: string[];   // NEW: Relevant hashtags
  masterVisualPrompt: string;
  masterImageBase64?: string | null;
  variations: BrandingVariation[];
}

// === OPTIONS ===
export const CLOTHING_OPTIONS = [
  { id: 'navy_professional', label: 'Agent Chuẩn Mực – Navy Professional', prompt: `Bộ “Agent Chuẩn Mực – Navy Professional”.
Unisex (AI hiểu cho cả nam & nữ):
- Áo blazer công sở màu xanh navy trơn, không họa tiết (nam: dáng đứng 2 nút; nữ: dáng ôm nhẹ 1–2 nút)
- Áo sơ mi trắng tinh, cổ cổ điển, tay dài, cài kín
- Quần tây đen hoặc navy đậm, ống đứng (không skinny, không baggy)
- Giày da công sở màu đen (nam: buộc dây; nữ: cao gót mũi nhọn 5–7cm hoặc giày da kín mũi)
- Phụ kiện: bảng tên nhỏ, túi xách/túi công sở, iPad hoặc folder
AI key: professional real estate agent outfit, identical clothing, no outfit change` },
  { id: 'black_executive', label: 'Doanh Nhân Cao Cấp – Black Executive', prompt: `Bộ “Doanh Nhân Cao Cấp – Black Executive”.
- Vest/blazer đen tuyền, chất liệu dày, form chuẩn
- Áo trong trắng ngà hoặc trắng tinh (nam: sơ mi trắng cổ cứng; nữ: blouse/sơ mi lụa cổ đơn giản)
- Quần tây đen, ống đứng
- Giày da đen
- Phụ kiện tối giản: đồng hồ kim loại mảnh, túi da form cứng
- Không cà vạt, không họa tiết, không logo lớn
AI key: luxury business attire, formal, high-end real estate
Constraint: identical clothing, no outfit change` },
  { id: 'beige_modern', label: 'Smart Casual – Beige Modern', prompt: `Bộ “Smart Casual – Beige Modern”.
- Blazer be nhạt (light beige), dáng gọn, không độn vai lớn
- Áo trong trắng sữa hoặc kem nhạt, cổ đơn giản
- Quần tây be hoặc xám nhạt, ống đứng
- Giày nude/nâu nhạt/đen
- Phụ kiện: túi vải cao cấp hoặc túi da đơn giản, tablet
AI key: smart casual professional outfit, clean and modern
Constraint: identical clothing, no outfit change` },
  { id: 'blue_white', label: 'Trẻ Trung Hiện Đại – Blue White', prompt: `Bộ “Trẻ Trung Hiện Đại – Blue White”.
- Sơ mi xanh nhạt (light blue), trơn, tay dài
- Quần tây hoặc chân váy (nữ) màu trắng hoặc kem
- Giày công sở trắng/nude/đen
- Không áo khoác ngoài; phong cách gọn gàng
- Phụ kiện tối thiểu; không kính râm; không balo
AI key: modern real estate agent, friendly and professional
Constraint: identical clothing, no outfit change` },
  { id: 'gray_minimal', label: 'Chuyên Gia Tư Vấn – Gray Minimal', prompt: `Bộ “Chuyên Gia Tư Vấn – Gray Minimal”.
- Blazer xám nhạt, trơn, form chuẩn
- Áo trong trắng hoặc xám rất nhạt, không cổ cầu kỳ
- Quần tây xám, ống đứng
- Giày da đen hoặc xám
- Tối giản, trung tính, không màu nổi
AI key: minimalist professional attire, neutral colors only
Constraint: identical clothing, no outfit change` },
];

;

;

export const TOWNHOUSE_OUTFITS = [
  { id: 'navy_professional', label: 'Agent Chuẩn Mực – Navy Professional', prompt: `Bộ “Agent Chuẩn Mực – Navy Professional”.
Unisex (AI hiểu cho cả nam & nữ):
- Áo blazer công sở màu xanh navy trơn, không họa tiết (nam: dáng đứng 2 nút; nữ: dáng ôm nhẹ 1–2 nút)
- Áo sơ mi trắng tinh, cổ cổ điển, tay dài, cài kín
- Quần tây đen hoặc navy đậm, ống đứng (không skinny, không baggy)
- Giày da công sở màu đen (nam: buộc dây; nữ: cao gót mũi nhọn 5–7cm hoặc giày da kín mũi)
- Phụ kiện: bảng tên nhỏ, túi xách/túi công sở, iPad hoặc folder
AI key: professional real estate agent outfit, identical clothing, no outfit change` },
  { id: 'black_executive', label: 'Doanh Nhân Cao Cấp – Black Executive', prompt: `Bộ “Doanh Nhân Cao Cấp – Black Executive”.
- Vest/blazer đen tuyền, chất liệu dày, form chuẩn
- Áo trong trắng ngà hoặc trắng tinh (nam: sơ mi trắng cổ cứng; nữ: blouse/sơ mi lụa cổ đơn giản)
- Quần tây đen, ống đứng
- Giày da đen
- Phụ kiện tối giản: đồng hồ kim loại mảnh, túi da form cứng
- Không cà vạt, không họa tiết, không logo lớn
AI key: luxury business attire, formal, high-end real estate
Constraint: identical clothing, no outfit change` },
  { id: 'beige_modern', label: 'Smart Casual – Beige Modern', prompt: `Bộ “Smart Casual – Beige Modern”.
- Blazer be nhạt (light beige), dáng gọn, không độn vai lớn
- Áo trong trắng sữa hoặc kem nhạt, cổ đơn giản
- Quần tây be hoặc xám nhạt, ống đứng
- Giày nude/nâu nhạt/đen
- Phụ kiện: túi vải cao cấp hoặc túi da đơn giản, tablet
AI key: smart casual professional outfit, clean and modern
Constraint: identical clothing, no outfit change` },
  { id: 'blue_white', label: 'Trẻ Trung Hiện Đại – Blue White', prompt: `Bộ “Trẻ Trung Hiện Đại – Blue White”.
- Sơ mi xanh nhạt (light blue), trơn, tay dài
- Quần tây hoặc chân váy (nữ) màu trắng hoặc kem
- Giày công sở trắng/nude/đen
- Không áo khoác ngoài; phong cách gọn gàng
- Phụ kiện tối thiểu; không kính râm; không balo
AI key: modern real estate agent, friendly and professional
Constraint: identical clothing, no outfit change` },
  { id: 'gray_minimal', label: 'Chuyên Gia Tư Vấn – Gray Minimal', prompt: `Bộ “Chuyên Gia Tư Vấn – Gray Minimal”.
- Blazer xám nhạt, trơn, form chuẩn
- Áo trong trắng hoặc xám rất nhạt, không cổ cầu kỳ
- Quần tây xám, ống đứng
- Giày da đen hoặc xám
- Tối giản, trung tính, không màu nổi
AI key: minimalist professional attire, neutral colors only
Constraint: identical clothing, no outfit change` },
];

;

;

export const BRANDING_BACKGROUNDS = [
  { id: 'studio', label: 'Studio Chuyên nghiệp (Professional Studio)' },
  { id: 'office', label: 'Văn phòng Hiện đại (Modern Office)' },
  { id: 'cafe', label: 'Quán Cafe Yên tĩnh (Cozy Cafe)' },
  { id: 'bookshelf', label: 'Thư viện / Kệ sách (Library/Bookshelf)' },
  { id: 'nature', label: 'Thiên nhiên Ngoài trời (Outdoor Nature)' },
  { id: 'podcast', label: 'Phòng thu Podcast (Podcast Setup)' },
  { id: 'custom', label: 'Tùy chỉnh (Custom)' }
];

export const BRANDING_STYLES = [
  { id: 'minimalist', label: 'Tối giản & Tinh tế (Minimalist)' },
  { id: 'luxury', label: 'Sang trọng & Đẳng cấp (Luxury)' },
  { id: 'friendly', label: 'Thân thiện & Dễ gần (Friendly)' },
  { id: 'authoritative', label: 'Uy tín & Chuyên gia (Authoritative)' },
  { id: 'cinematic', label: 'Điện ảnh & Nghệ thuật (Cinematic)' }
];

export const BRANDING_TONES = [
  { id: 'inspirational', label: 'Truyền cảm hứng (Inspirational)' },
  { id: 'educational', label: 'Giáo dục / Chia sẻ (Educational)' },
  { id: 'storytelling', label: 'Kể chuyện (Storytelling)' },
  { id: 'witty', label: 'Hài hước & Dí dỏm (Witty)' },
  { id: 'serious', label: 'Nghiêm túc & Phân tích (Serious)' }
];

export const RATIO_OPTIONS: AspectRatio[] = ['9:16', '16:9', '1:1'];

// Legacy support
export interface GeneratedContent {
  characterImageBase64: string | null;
  script: string;
  veoPrompt: string;
}

export interface TextGenerationResult {
  visualPrompt: string;
  script: string;
  veoPrompt: string;
}
