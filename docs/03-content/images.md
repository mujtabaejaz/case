# Images

How to add and optimize images in your portfolio.

## Where to Store Images

### `src/assets/` (Recommended)

Images are processed and optimized by Astro at build time.

```
src/assets/
├── projects/
│   ├── payment-system-architecture.png
│   ├── banking-hero.webp
│   └── search-dashboard.jpg
├── writing/
│   └── api-diagram.png
└── profile.jpg
```

**Benefits:**
- Automatic format conversion (WebP/AVIF)
- Responsive image generation
- Optimized file sizes
- Build-time validation

### `public/`

Images are served as-is without processing.

```
public/
├── og-image.png
├── favicon.svg
└── screenshots/
    └── demo.png
```

**Use for:**
- Favicons and app icons
- Open Graph images
- Files that must keep exact format/size

## Using Images in Projects

### Hero Image and Gallery

For project case studies, use relative paths in frontmatter:

```mdx
---
title: "Mobile Banking App Redesign"
heroImage: "../../assets/projects/banking-hero.webp"
gallery:
  - src: "../../assets/projects/banking-wireframes.png"
    alt: "Low-fidelity wireframes showing the new navigation structure"
    caption: "Early wireframes exploring simplified navigation"
  - src: "../../assets/projects/banking-final.png"
    alt: "Final design screens"
    caption: "Final design with new visual language"
---
```

**Path Structure:**
- From `src/content/projects/your-project.mdx`
- Go up 2 levels: `../../`
- Then into assets: `assets/projects/your-image.webp`

The images will be automatically optimized by Astro's Image component at build time.

### Using Public Folder Images

If you prefer to use images from the `public/` folder (no optimization):

```mdx
---
title: "My Project"
heroImage: "/images/projects/hero.png"
gallery:
  - src: "/images/projects/screenshot-1.png"
    alt: "Screenshot description"
---
```

## Using Images in MDX Content

### Basic Markdown Image

For images in `public/`:

```markdown
![Alt text](/images/my-image.png)
```

### Optimized Images with Component

For images in `src/assets/`:

```mdx
---
title: "My Project"
---

import OptimizedImage from '@/components/OptimizedImage.astro';
import architectureDiagram from '@/assets/projects/architecture.png';

## Architecture Overview

<OptimizedImage 
  src={architectureDiagram} 
  alt="System architecture diagram"
  width={800}
  height={600}
/>
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | ImageMetadata | required | Imported image |
| `alt` | string | required | Accessible description |
| `width` | number | required | Display width in pixels |
| `height` | number | required | Display height in pixels |
| `loading` | 'lazy' \| 'eager' | 'lazy' | Loading strategy |
| `quality` | number | 80 | Compression quality (1-100) |
| `format` | 'avif' \| 'webp' \| 'png' \| 'jpg' | 'webp' | Output format |
| `class` | string | - | CSS class name |

## Best Practices

### File Naming

Use descriptive, kebab-case names:
- ✅ `payment-flow-diagram.png`
- ✅ `banking-hero.webp`
- ❌ `IMG_1234.png`
- ❌ `Screenshot 2024-01-15.png`

### Alt Text

Write meaningful alt text for accessibility:

```mdx
// ✅ Good
alt="Flowchart showing payment processing: validation, authorization, capture"

// ❌ Bad
alt="diagram"
```

### Recommended Dimensions

| Use Case | Recommended Size |
|----------|------------------|
| Hero images | 1600 x 900 px |
| Project screenshots | 1200 x 800 px |
| Architecture diagrams | 1000 x 600 px |
| Blog post images | 800 x 450 px |
| Profile photo | 400 x 400 px |

### File Size Guidelines

Before optimization:
- Hero images: < 800KB
- Screenshots: < 500KB
- Photos: < 1MB
- Diagrams: < 200KB

Astro optimizes these further at build time.

## Troubleshooting

### Image Not Found (404 Error)

```
[404] /assets/projects/banking-hero.webp
```

**Fix:** 
1. Ensure the image file exists in `src/assets/projects/`
2. Check the relative path in your frontmatter is correct
3. Restart the dev server after adding new images

### Build Fails with Image Error

**Fix:** Ensure the image file is not corrupted. Try re-exporting from your image editor.

### Images Look Blurry

**Fix:** Provide source images at 2x the display size for retina displays. If displaying at 400px width, use an 800px source image.
