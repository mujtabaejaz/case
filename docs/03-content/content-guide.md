# Content Guide

All content is managed through MDX files in `src/content/`. Each content type has its own collection with schema validation.

## Flexible Portfolio System

This theme is designed to be flexible for multiple portfolio types and roles:

- **Engineering:** Use `problem`, `approach`, `techStack`, `keyDecisions`
- **Design/UX:** Use `brief`, `process`, `tools`, `research`, `highlights`
- **Creative:** Use `challenge`, `process`, `tools`, `highlights`
- **Product Management:** Use `brief`, `approach`, `highlights`

Most fields are optional, allowing you to craft narratives that fit your unique projects. The structured sections provide the framework, while freeform markdown content adds depth and nuance.

## General Workflow

1. Navigate to the appropriate content directory
2. Create a new `.mdx` file
3. Add frontmatter with required fields
4. Write your content in Markdown/MDX
5. Run `npm run build` to validate

If your content doesn't match the schema, the build will fail with clear error messages.

## File Naming

Use kebab-case for file names:
- ✅ `payment-system-rebuild.mdx`
- ❌ `Payment System Rebuild.mdx`

The filename becomes the URL slug (e.g., `/projects/payment-system-rebuild`).

---

## Projects (Case Studies)

Location: `src/content/projects/`

Flexible case studies supporting multiple portfolio types (engineering, design, creative, product management, etc.). Most fields are optional to accommodate different storytelling approaches.

### Core Fields (Required)

```yaml
---
title: "Project Title"
role: "Your Role"
year: 2024
summary: "Brief impact summary (1-2 sentences)"
---
```

### Complete Example with All Options

```yaml
---
# === CORE (Required) ===
title: "Project Title"
role: "Your Role"
year: 2024
summary: "Brief impact summary (1-2 sentences)"

# === VISUAL MEDIA (Optional) ===
heroImage: "../../assets/projects/hero.webp"
gallery:
  - src: "../../assets/projects/screenshot-1.png"
    alt: "Screenshot description"
    caption: "Optional caption"
videoUrl: "https://youtube.com/watch?v=xxx"

# === NARRATIVE SECTIONS (All Optional) ===
overview: "High-level project overview"

# Context (choose terminology that fits your field)
problem: "What problem were you solving?"        # Engineering
challenge: "What challenge did you face?"        # General
brief: "What was the project brief?"             # Creative/Design

# Constraints/Requirements
constraints:
  - "Constraint 1"
  - "Constraint 2"
requirements:  # Alternative to constraints
  - "Requirement 1"

# Approach/Process
approach: "How did you approach the solution?"   # Engineering
process: "What was your design process?"         # Design/Creative

# === RESEARCH (UX/Design Projects) ===
research:
  methods:
    - "User interviews"
    - "Usability testing"
  findings:
    - "Key finding 1"
    - "Key finding 2"
  insights: "Summary of research insights"

# === KEY DECISIONS (Engineering Style) ===
keyDecisions:
  - decision: "What you decided"
    reasoning: "Why you made this decision"
    alternatives:
      - "Alternative 1"
      - "Alternative 2"

# === HIGHLIGHTS (Flexible Alternative) ===
highlights:
  - type: "insight"      # Options: decision, insight, milestone, feature, challenge
    title: "Highlight Title"
    description: "Description"
    details:
      - "Detail 1"
      - "Detail 2"

# === TOOLS/STACK ===
tools:           # Generic (design, creative)
  - "Figma"
  - "Miro"
techStack:       # Engineering terminology
  - "React"
  - "PostgreSQL"

# === IMPACT/RESULTS ===
impact:
  metrics:
    - label: "Metric Name"
      value: "50% improvement"
      previousValue: "Optional before value"
  qualitative: "Broader impact description"

# === LEARNINGS/REFLECTIONS ===
learnings:       # List format
  - "Key learning 1"
  - "Key learning 2"
reflections: "Narrative reflection on the project"  # Paragraph format

# === META ===
featured: false
status: completed  # Options: completed, ongoing, archived
order: 10
duration: "3 months"
teamSize: 4
client: "Client Name"
category: "Web Development"

# === RELATED CONTENT ===
relatedProjects:
  - "other-project-slug"
relatedDecisions:
  - "related-decision-slug"
---

Optional freeform markdown content for additional details and nuances.
```

### Field Notes

**Flexible Terminology:** Choose field names that match your discipline:
- Engineering: `problem`, `approach`, `techStack`, `keyDecisions`
- Design/UX: `brief`, `process`, `tools`, `research`, `highlights`
- Creative: `challenge`, `process`, `tools`, `highlights`
- Product: `brief`, `approach`, `highlights`

**Status Options:**
- `completed` (default) — Finished projects, no badge shown
- `ongoing` — Active projects, shows green "Ongoing" badge
- `archived` — Historical projects, shows gray "Archived" badge

**Highlights vs Key Decisions:**
- Use `keyDecisions` for technical/architectural decisions with alternatives
- Use `highlights` for flexible project highlights (insights, milestones, features, challenges)
- Both are optional; choose what fits your narrative

**Learnings vs Reflections:**
- Use `learnings` for bullet-point list of takeaways
- Use `reflections` for narrative paragraph format
- Can use both if desired

**Cross-Referencing:** Use `relatedProjects` and `relatedDecisions` to link related content. The slug is the filename without `.mdx` (e.g., `payment-system-rebuild.mdx` → `"payment-system-rebuild"`). Related content appears at the bottom of the detail page.

**Freeform Content:** Add markdown content in the body for additional details and nuances that don't fit the structured sections. This renders naturally after the structured sections without a wrapper heading.

---

## Decisions

Location: `src/content/decisions/`

Flexible decision records supporting multiple formats (technical ADR, design decisions, process decisions, strategic decisions, creative direction).

### Core Fields (Required)

```yaml
---
title: "Decision Title"
date: 2024-01-15
decision: "What did you decide?"
---
```

### Complete Example with All Options

```yaml
---
# === CORE ===
title: "Decision Title"
date: 2024-01-15
decision: "What did you decide?"

# === TYPE ===
type: "technical"  # Options: technical, design, process, strategic, creative

# === CONTEXT (Choose terminology that fits) ===
context: "What situation required this decision?"      # Technical
background: "Background information"                   # General
situation: "Situation description"                     # Alternative

# === ALTERNATIVES (Detailed Format with Pros/Cons) ===
alternatives:
  - option: "Alternative 1"
    pros:
      - "Pro 1"
      - "Pro 2"
    cons:
      - "Con 1"
    image: "../../assets/decisions/option-1.png"  # For design decisions
    notes: "Additional notes"
  - option: "Alternative 2"
    pros:
      - "Pro 1"
    cons:
      - "Con 1"

# === OPTIONS CONSIDERED (Simple List Format) ===
optionsConsidered:  # Alternative to detailed alternatives
  - "Option 1"
  - "Option 2"

# === REASONING ===
reasoning: "Why did you make this decision?"           # Technical
rationale: "Rationale for the decision"                # Alternative

# === OUTCOME ===
outcome:
  status: "successful"  # Options: successful, mixed, revised, pending
  summary: "Summary of the outcome"
  lessonsLearned:
    - "Lesson 1"
    - "Lesson 2"

# === VISUAL SUPPORT ===
images:
  - src: "../../assets/decisions/comparison.png"
    alt: "Comparison image"
    caption: "Optional caption"

# === META ===
tags:
  - "architecture"
  - "database"
relatedProjects:
  - "project-slug"
relatedDecisions:
  - "other-decision-slug"
---

Optional freeform markdown content for additional context.
```

### Decision Types

- `technical` — Full ADR style with pros/cons analysis
- `design` — Visual-focused with image comparisons
- `process` — Workflow and methodology decisions
- `strategic` — Business and direction decisions
- `creative` — Creative direction and style choices

**Cross-Referencing:** Same as Projects — use `relatedProjects` and `relatedDecisions` to show connections between your decisions and the projects they influenced.

---

## Journey

Location: `src/content/journey/`

Career timeline entries showing milestones, learnings, and transitions.

```yaml
---
date: 2024-01-15
title: "Entry Title"
type: "milestone"  # Options: milestone, learning, transition
description: "What happened and what you learned"
skills:            # Optional
  - "Skill 1"
---
```

**Entry Types:**
- `milestone` — Career achievements, promotions
- `learning` — Skills learned, certifications
- `transition` — Role changes, career pivots

---

## Writing (Blog)

Location: `src/content/writing/`

Blog posts and technical articles with full MDX support.

```yaml
---
title: "Article Title"
description: "Brief description for SEO"
publishDate: 2024-01-15
updatedDate: 2024-02-01  # Optional
tags:                     # Optional
  - "topic1"
draft: false              # Set true to hide from production
---
```

**Features:**
- Articles with 3+ headings automatically get a Table of Contents
- Draft articles (`draft: true`) won't appear in production builds

---

## Speaking

Location: `src/content/speaking/`

Conference talks, meetup presentations, podcast appearances.

```yaml
---
title: "Talk Title"
description: "Talk description"
event: "Event Name"
date: 2024-01-15
location: "City, Country"  # or "Online"
type: "conference"         # Options: conference, meetup, podcast, workshop, webinar
eventUrl: ""               # Optional
slides: ""                 # Optional
video: ""                  # Optional
duration: "45 min"         # Optional
topics:                    # Optional
  - "Topic 1"
featured: false
---
```

---

## Uses

Location: `src/content/uses/`

Document your tools, tech stack, and development environment.

```yaml
---
category: "tools"  # Options: tools, stack, environment
items:
  - name: "Tool Name"
    description: "What you use it for"
    url: "https://..."  # Optional
order: 1
---
```

**Categories:**
- `tools` — Software tools, editors, apps
- `stack` — Programming languages, frameworks
- `environment` — Hardware, desk setup

---

## Testimonials

Location: `src/content/testimonials/`

Endorsements and recommendations from colleagues and clients.

```yaml
---
name: "Person's Name"
role: "Their Role"
company: "Their Company"
relationship: "How you worked together"
quote: "Their testimonial text"
date: 2024-01-15
linkedin: ""       # Optional
featured: false    # Show on homepage
---
```

---

## Content Validation

Run `npm run build` to validate all content against schemas. Errors will show:
- Which file has the error
- Which field is invalid
- What was expected vs. provided

## MDX Features

All content files support MDX:
- Standard Markdown syntax
- Import and use Astro components
- Add interactive elements

## Related Guides

- [Content Templates](./templates.md) — Copy-paste templates
- [Content Strategy](./content-strategy.md) — Best practices for featured content and ordering
- [Images](./images.md) — How to add and optimize images
