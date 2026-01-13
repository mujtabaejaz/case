# Content Strategy

Best practices for organizing and presenting your portfolio content.

## Featured Content

The `featured` field controls which items appear on your homepage.

### Projects

```yaml
featured: true   # Shows on homepage
order: 1         # Lower number = appears first
```

**Recommendations:**
- Feature 2-4 projects maximum
- Choose projects that demonstrate range
- Prioritize recent work
- Lead with your strongest case study (`order: 1`)

**Selection criteria:**
- Clear, measurable impact
- Interesting technical challenges
- Projects you can discuss confidently
- Work that represents your career direction

### Testimonials

- Feature 2-3 testimonials on homepage
- Choose different relationship types (manager, peer, report)
- Prioritize specific praise over generic endorsements

### Speaking

- Feature talks with recordings or slides available
- Prioritize larger events or well-known conferences

## Ordering Content

The `order` field determines display sequence. Lower numbers appear first.

```yaml
order: 1   # First position
order: 3   # Second position
order: 5   # Third position
```

**Tips:**
- Use gaps (1, 3, 5) to make reordering easier later
- For projects: lead with impact, not chronology

## Content Volume Guidelines

| Content Type | Minimum | Recommended | Maximum |
|--------------|---------|-------------|---------|
| Projects | 3 | 5-8 | 12 |
| Decisions | 2 | 4-6 | 10 |
| Journey | 3 | 5-10 | 15 |
| Writing | 0 | 3-5 | No limit |
| Speaking | 0 | 2-4 | No limit |
| Testimonials | 2 | 3-5 | 8 |
| Uses | 1 | 1 | 1 |

**Quality over quantity.** 4 excellent case studies beats 12 mediocre ones.

## Content Refresh Cadence

- **Projects:** Add within 1-2 months of completion
- **Journey:** Update quarterly or after milestones
- **Writing:** 1-2 posts per quarter if blogging
- **Uses:** Review annually
- **Testimonials:** Request after successful projects

## Writing Effective Case Studies

### The Narrative Arc

The flexible schema supports multiple narrative structures. Choose what fits your project:

**Engineering/Technical:**
1. **Problem** — What was broken or missing?
2. **Constraints** — What made this hard?
3. **Approach** — How did you tackle it?
4. **Key Decisions** — What trade-offs did you make?
5. **Impact** — What changed because of your work?
6. **Learnings** — What would you do differently?

**Design/UX:**
1. **Brief** — What was the design challenge?
2. **Research** — What did you learn from users?
3. **Process** — How did you approach the design?
4. **Highlights** — Key insights, milestones, and features
5. **Impact** — How did it improve the user experience?
6. **Reflections** — What did you learn?

**Creative/Brand:**
1. **Challenge** — What did the client need?
2. **Process** — Your creative approach
3. **Highlights** — Key creative decisions and features
4. **Impact** — How the work performed
5. **Reflections** — Lessons learned

**Product Management:**
1. **Brief** — What was the product opportunity?
2. **Requirements** — What constraints existed?
3. **Approach** — How did you develop the product?
4. **Highlights** — Key decisions, milestones, features
5. **Impact** — Business and user outcomes
6. **Learnings** — Product insights

### Using Freeform Content

The schema provides structured sections for the main narrative, but you can add freeform markdown content in the body for:
- Additional technical details
- Design system documentation
- Process iterations
- Team collaboration stories
- Extended reflections

This content renders naturally after the structured sections without a wrapper heading, allowing you to add depth and nuance to your case study.

### Metrics That Matter

Good metrics are:
- **Specific:** "60% reduction" not "significant improvement"
- **Contextual:** "from 2.5s to 1s" shows before/after
- **Business-relevant:** Connect technical wins to outcomes

```yaml
impact:
  metrics:
    - label: "Processing Time"
      value: "60% reduction (1s)"
      previousValue: "2.5s"
    - label: "Error Rate"
      value: "0.1%"
      previousValue: "2.3%"
  qualitative: "Improved user satisfaction and reduced support tickets by 40%"
```

### Key Decisions vs Highlights

**Use `keyDecisions` for:**
- Technical/architectural decisions
- Detailed pros/cons analysis
- Engineering portfolios

```yaml
keyDecisions:
  - decision: "Use event sourcing for payment state"
    reasoning: "Complete audit trail, easier debugging"
    alternatives:
      - "Traditional CRUD with audit logs"
      - "State machine with database transactions"
```

**Use `highlights` for:**
- Flexible project highlights
- Design insights and milestones
- Features and challenges
- Non-engineering portfolios

```yaml
highlights:
  - type: "insight"
    title: "Simplified Navigation"
    description: "Reduced main navigation from 8 items to 4"
    details:
      - "Home, Payments, Cards, More"
      - "Personalized quick actions"
  - type: "milestone"
    title: "WCAG 2.1 AA Compliance"
    description: "Achieved full accessibility compliance"
  - type: "challenge"
    title: "Legacy System Constraints"
    description: "Worked around backend limitations"
```

**Tips:**
- Include 2-4 key decisions or 3-6 highlights per project
- Always provide context and reasoning
- It's okay to mention decisions that didn't work out

## Draft Mode

Use `draft: true` for work-in-progress:

```yaml
---
title: "My New Article"
draft: true   # Won't appear in production
---
```

- Visible in development (`npm run dev`)
- Hidden in production builds
