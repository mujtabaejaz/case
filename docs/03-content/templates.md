# Content Templates

Copy-paste templates for quickly creating new content.

## Project Template

`src/content/projects/your-project-name.mdx`

### Minimal Template (Required Fields Only)

```yaml
---
title: "Project Title"
role: "Your Role"
year: 2024
summary: "One sentence describing the key outcome"
---

Optional freeform markdown content.
```

### Engineering/Technical Project Template

```yaml
---
title: "Project Title"
role: "Senior Backend Engineer"
year: 2024
summary: "One sentence describing the key outcome"
overview: "2-3 sentences explaining what this project was about"
problem: "What problem were you solving? What was broken or missing?"
constraints:
  - "First constraint (time, budget, team size, etc.)"
  - "Second constraint"
approach: "How did you approach solving this problem?"
keyDecisions:
  - decision: "A key technical or architectural decision"
    reasoning: "Why you made this decision"
    alternatives:
      - "Alternative option you considered"
techStack:
  - "Technology 1"
  - "Technology 2"
impact:
  metrics:
    - label: "Metric Name"
      value: "50% improvement"
      previousValue: "Previous value"
  qualitative: "Broader impact beyond the numbers"
learnings:
  - "Key lesson learned from this project"
featured: false
status: completed
order: 10
duration: "3 months"
teamSize: 4
---

Optional additional technical details.
```

### UX/Design Project Template

```yaml
---
title: "Project Title"
role: "Lead UX Designer"
year: 2024
summary: "One sentence describing the key outcome"
heroImage: "../../assets/projects/hero.webp"
overview: "2-3 sentences explaining what this project was about"
brief: "What was the project brief? What needed to be designed?"
research:
  methods:
    - "User interviews (25 participants)"
    - "Usability testing"
    - "Competitive analysis"
  findings:
    - "Key finding from research"
    - "Another important finding"
  insights: "Summary of what you learned from research"
process: "Your design process and approach"
highlights:
  - type: "insight"
    title: "Key Design Insight"
    description: "Description of the insight"
    details:
      - "Supporting detail 1"
      - "Supporting detail 2"
  - type: "milestone"
    title: "Important Milestone"
    description: "What was achieved"
  - type: "challenge"
    title: "Challenge Overcome"
    description: "How you addressed it"
tools:
  - "Figma"
  - "Maze"
  - "Miro"
gallery:
  - src: "../../assets/projects/wireframes.png"
    alt: "Low-fidelity wireframes"
    caption: "Early wireframes exploring navigation"
  - src: "../../assets/projects/final.png"
    alt: "Final design"
    caption: "Final design with new visual language"
impact:
  metrics:
    - label: "Task Completion Rate"
      value: "94%"
      previousValue: "67%"
    - label: "App Store Rating"
      value: "4.6 stars"
  qualitative: "Broader impact on user satisfaction and business goals"
reflections: "Narrative reflection on what you learned and would do differently"
featured: false
status: completed
client: "Client Name"
---

## Additional Design Details

Optional freeform content for design system, iterations, etc.
```

### Creative/Brand Project Template

```yaml
---
title: "Project Title"
role: "Brand Designer"
year: 2024
summary: "One sentence describing the key outcome"
heroImage: "../../assets/projects/hero.webp"
overview: "2-3 sentences explaining the project"
challenge: "What challenge did the client face?"
process: "Your creative process"
highlights:
  - type: "insight"
    title: "Brand Strategy"
    description: "Key strategic insight"
  - type: "feature"
    title: "Visual Identity"
    description: "What you created"
    details:
      - "Logo system"
      - "Color palette"
      - "Typography"
tools:
  - "Adobe Illustrator"
  - "Figma"
gallery:
  - src: "../../assets/projects/logo.png"
    alt: "Logo variations"
  - src: "../../assets/projects/colors.png"
    alt: "Color palette"
impact:
  qualitative: "How the brand identity impacted the business"
reflections: "What you learned from this project"
featured: false
client: "Client Name"
---
```

### Product Management Project Template

```yaml
---
title: "Project Title"
role: "Product Manager"
year: 2024
summary: "One sentence describing the key outcome"
overview: "2-3 sentences explaining the product"
brief: "What was the product opportunity?"
requirements:
  - "Key requirement 1"
  - "Key requirement 2"
approach: "How you approached product development"
highlights:
  - type: "decision"
    title: "Key Product Decision"
    description: "What you decided and why"
  - type: "milestone"
    title: "Launch Milestone"
    description: "What was achieved"
  - type: "feature"
    title: "Core Feature"
    description: "Feature description"
    details:
      - "Feature detail 1"
      - "Feature detail 2"
impact:
  metrics:
    - label: "User Adoption"
      value: "10,000 users in 3 months"
    - label: "Revenue"
      value: "$500K ARR"
  qualitative: "Market impact and user feedback"
learnings:
  - "Key learning about product-market fit"
  - "Lesson about user needs"
featured: false
teamSize: 8
duration: "6 months"
---
```

## Decision Template

`src/content/decisions/your-decision-name.mdx`

### Technical Decision (ADR Style)

```yaml
---
title: "Decision Title"
date: 2024-01-15
type: "technical"
context: "What situation or problem required this decision?"
decision: "What did you decide to do?"
alternatives:
  - option: "First alternative considered"
    pros:
      - "Advantage of this option"
    cons:
      - "Disadvantage of this option"
  - option: "Second alternative considered"
    pros:
      - "Advantage of this option"
    cons:
      - "Disadvantage of this option"
reasoning: "Why did you choose this option over the alternatives?"
outcome:
  status: "successful"
  summary: "How the decision worked out"
  lessonsLearned:
    - "Lesson learned from this decision"
tags:
  - "architecture"
  - "database"
relatedProjects:
  - "project-slug"
---

Optional additional context.
```

### Design Decision

```yaml
---
title: "Design System Color Palette"
date: 2024-01-15
type: "design"
background: "Why this design decision was needed"
decision: "What design direction you chose"
alternatives:
  - option: "Option 1"
    image: "../../assets/decisions/option-1.png"
    pros:
      - "Visual advantage"
    cons:
      - "Visual limitation"
  - option: "Option 2"
    image: "../../assets/decisions/option-2.png"
    pros:
      - "Visual advantage"
    cons:
      - "Visual limitation"
rationale: "Why you chose this design direction"
images:
  - src: "../../assets/decisions/final-palette.png"
    alt: "Final color palette"
    caption: "The chosen color system"
tags:
  - "design-system"
  - "visual-design"
---
```

### Simple Decision (Without Pros/Cons)

```yaml
---
title: "Decision Title"
date: 2024-01-15
type: "process"
situation: "What required this decision"
decision: "What you decided"
optionsConsidered:
  - "Option 1"
  - "Option 2"
  - "Option 3"
reasoning: "Why you made this choice"
tags:
  - "process"
---
```

## Journey Entry Template

`src/content/journey/your-entry-name.mdx`

```yaml
---
date: 2024-01-15
title: "Entry Title"
type: "milestone"
description: "What happened and what you learned. 2-4 sentences."
skills:
  - "Skill 1"
  - "Skill 2"
---
```

**Type options:** `milestone`, `learning`, `transition`

## Writing (Blog) Template

`src/content/writing/your-article-name.mdx`

```yaml
---
title: "Article Title"
description: "Brief description for SEO (150-160 characters)"
publishDate: 2024-01-15
tags:
  - "topic1"
  - "topic2"
draft: false
---

Your article content in Markdown.

## First Section

Content here...
```

## Speaking Template

`src/content/speaking/your-talk-name.mdx`

```yaml
---
title: "Talk Title"
description: "Brief description of what the talk covers"
event: "Event or Conference Name"
date: 2024-01-15
location: "City, Country"
type: "conference"
slides: "https://speakerdeck.com/your-slides"
video: "https://youtube.com/watch?v=xxx"
duration: "30 min"
topics:
  - "Topic 1"
featured: false
---

Optional talk abstract.
```

**Type options:** `conference`, `meetup`, `podcast`, `workshop`, `webinar`

## Testimonial Template

`src/content/testimonials/person-name.mdx`

```yaml
---
name: "Person's Full Name"
role: "Their Job Title"
company: "Their Company"
relationship: "How you worked together (e.g., 'Direct manager at Company X')"
quote: "Their testimonial text. Keep it concise and specific."
date: 2024-01-15
linkedin: "https://linkedin.com/in/their-username"
featured: false
---
```

## Uses Template

`src/content/uses/my-setup.mdx`

```yaml
---
category: "tools"
items:
  - name: "Tool Name"
    description: "What you use it for"
    url: "https://tool-website.com"
  - name: "Another Tool"
    description: "What you use it for"
order: 1
---

Optional additional notes.
```

**Category options:** `tools`, `stack`, `environment`

---

## Quick Reference

| Content Type | Location | Key Required Fields |
|--------------|----------|---------------------|
| Project | `projects/` | title, role, year, summary |
| Decision | `decisions/` | title, date, decision |
| Journey | `journey/` | date, title, type, description |
| Writing | `writing/` | title, description, publishDate |
| Speaking | `speaking/` | title, event, date, location, type |
| Testimonial | `testimonials/` | name, role, company, quote, date |
| Uses | `uses/` | category, items, order |

## Field Terminology Guide

Choose field names that match your discipline:

| Field Purpose | Engineering | Design/UX | Creative | Product |
|--------------|-------------|-----------|----------|---------|
| Context | `problem` | `brief` | `challenge` | `brief` |
| Method | `approach` | `process` | `process` | `approach` |
| Tools | `techStack` | `tools` | `tools` | `tools` |
| Key Points | `keyDecisions` | `highlights` | `highlights` | `highlights` |
| Takeaways | `learnings` | `reflections` | `reflections` | `learnings` |
