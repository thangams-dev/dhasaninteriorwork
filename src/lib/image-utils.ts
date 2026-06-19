/**
 * Transform Lovable asset URLs to working placeholder images
 * Uses placeholder service while original images are unavailable
 */
export function getImageUrl(assetData: { url?: string; original_filename?: string } | string): string {
  if (typeof assetData === 'string') {
    return assetData;
  }

  const filename = assetData.original_filename || '';
  const assetId = assetData.url?.split('/')[3] || Math.random().toString();

  // Map specific images to appropriate placeholder dimensions
  const placeholderMap: Record<string, { w: number; h: number }> = {
    'hero-kitchen.jpg': { w: 1200, h: 600 },
    'kitchen-yellow.jpg': { w: 800, h: 600 },
    'kitchen-modular.jpg': { w: 800, h: 600 },
    'wall-partition.jpg': { w: 800, h: 600 },
    'tv-unit-wood.png': { w: 800, h: 600 },
    'wardrobe-walnut.png': { w: 800, h: 600 },
    'pvc-kitchen-magenta.png': { w: 800, h: 600 },
    'pooja-unit-traditional.png': { w: 600, h: 800 },
    'pooja-partition-art.png': { w: 800, h: 600 },
    'logo.png': { w: 200, h: 200 },
    'interior-banner.jpg': { w: 1200, h: 400 },
    'tv-pooja.jpg': { w: 800, h: 600 },
  };

  const dims = placeholderMap[filename] || { w: 800, h: 600 };
  
  // Use placeholder service - picsum.photos
  // Use hash of filename to get consistent image for each file
  const seed = assetId.substring(0, 8);
  return `https://picsum.photos/${dims.w}/${dims.h}?random=${seed}`;
}
