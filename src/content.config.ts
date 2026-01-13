/**
 * Content Collections Configuration
 * 
 * Defines all content collections for the site with their schemas and validation rules.
 * Uses Astro's Content Collections API with Zod for type-safe content management.
 * 
 * Collections:
 * - projects: Flexible case studies supporting multiple portfolio types (engineering, design, creative, etc.)
 * - decisions: Decision records with multiple formats (technical ADR, design, process, strategic)
 * - journey: Career timeline entries
 * - writing: Blog posts and articles
 * - uses: Tools, stack, and environment documentation
 * - speaking: Conference talks and presentations
 * - testimonials: Endorsements and recommendations
 * 
 * All collections use the glob loader to read MDX files from their respective directories.
 * Schemas enforce data structure and provide TypeScript types throughout the application.
 * 
 * @module content.config
 */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects (Case Studies) Collection
 * 
 * Flexible case studies supporting multiple portfolio types:
 * - Engineering: Technical projects with architecture decisions
 * - Design: UX/UI projects with research and process
 * - Creative: Writing, branding, and creative direction
 * - General: Flexible format for any project type
 * 
 * Features:
 * - Visual media support (hero image, gallery, video)
 * - Flexible narrative sections (all optional except core fields)
 * - Multiple terminology options (problem/challenge/brief, approach/process)
 * - Research section for UX/design projects
 * - Highlights system as alternative to key decisions
 * - Impact metrics with before/after comparison
 * - Client field for freelancer/agency portfolios
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    // === CORE (Required) ===
    /** Project title */
    title: z.string(),
    
    /** Your role in the project */
    role: z.string(),
    
    /** Year the project was completed */
    year: z.number(),
    
    /** Brief summary of outcomes and impact (generic name) */
    summary: z.string(),
    
    // === VISUAL MEDIA (Optional) ===
    /** Hero/cover image for the project */
    heroImage: z.string().optional(),
    
    /** Gallery of project images */
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    
    /** Video URL (YouTube, Vimeo, etc.) */
    videoUrl: z.string().url().optional(),
    
    // === FLEXIBLE NARRATIVE SECTIONS ===
    /** High-level project overview */
    overview: z.string().optional(),
    
    /** Problem being addressed (engineering terminology) */
    problem: z.string().optional(),
    
    /** Challenge faced (general terminology) */
    challenge: z.string().optional(),
    
    /** Project brief (creative/design terminology) */
    brief: z.string().optional(),
    
    /** Project constraints and limitations */
    constraints: z.array(z.string()).optional(),
    
    /** Project requirements (alternative to constraints) */
    requirements: z.array(z.string()).optional(),
    
    /** Solution approach and strategy (engineering) */
    approach: z.string().optional(),
    
    /** Design/creative process (design terminology) */
    process: z.string().optional(),
    
    // === RESEARCH SECTION (UX/Design) ===
    /** Research details for UX/design projects */
    research: z.object({
      /** Research methods used */
      methods: z.array(z.string()).optional(),
      /** Key research findings */
      findings: z.array(z.string()).optional(),
      /** Research insights summary */
      insights: z.string().optional(),
    }).optional(),
    
    // === KEY HIGHLIGHTS (Flexible) ===
    /** Flexible highlights - alternative to keyDecisions */
    highlights: z.array(z.object({
      /** Type of highlight for styling */
      type: z.enum(['decision', 'insight', 'milestone', 'feature', 'challenge']).default('insight'),
      /** Highlight title */
      title: z.string(),
      /** Highlight description */
      description: z.string(),
      /** Additional details */
      details: z.array(z.string()).optional(),
    })).optional(),
    
    /** Key technical decisions with reasoning (engineering style) */
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })).optional(),
    
    // === TOOLS/STACK ===
    /** Tools used (generic name) */
    tools: z.array(z.string()).optional(),
    
    /** Technologies and frameworks used (engineering terminology) */
    techStack: z.array(z.string()).optional(),
    
    // === IMPACT/RESULTS ===
    /** Project impact and results */
    impact: z.object({
      /** Quantitative metrics */
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
        /** Previous value for before/after comparison */
        previousValue: z.string().optional(),
      })).optional(),
      /** Qualitative impact description */
      qualitative: z.string().optional(),
    }).optional(),
    
    // === LEARNINGS/REFLECTIONS ===
    /** Key learnings and takeaways (list format) */
    learnings: z.array(z.string()).optional(),
    
    /** Reflections on the project (narrative format) */
    reflections: z.string().optional(),
    
    // === META ===
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Project status */
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    
    /** Custom sort order (lower numbers first) */
    order: z.number().optional(),
    
    /** Project duration (e.g., "3 months", "1.5 years") */
    duration: z.string().optional(),
    
    /** Team size for scope context */
    teamSize: z.number().optional(),
    
    /** Client name (for freelancer/agency portfolios) */
    client: z.string().optional(),
    
    /** Project category for filtering */
    category: z.string().optional(),
    
    // === RELATED ===
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** Related decision slugs for cross-referencing */
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

/**
 * Decisions Collection
 * 
 * Flexible decision records supporting multiple formats:
 * - Technical: Full ADR style with pros/cons analysis
 * - Design: Visual-focused with image comparisons
 * - Process: Workflow and methodology decisions
 * - Strategic: Business and direction decisions
 * - Creative: Creative direction and style choices
 * 
 * Features:
 * - Multiple decision types with appropriate rendering
 * - Flexible alternatives format (detailed or simple list)
 * - Visual support for design decisions
 * - Outcome tracking with lessons learned
 * - Multiple terminology options for context
 */
const decisionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/decisions' }),
  schema: z.object({
    // === CORE ===
    /** Decision title */
    title: z.string(),
    
    /** Date the decision was made */
    date: z.coerce.date(),
    
    /** The decision that was made */
    decision: z.string(),
    
    // === TYPE ===
    /** Decision type for conditional rendering */
    type: z.enum([
      'technical',   // ADR style - full pros/cons
      'design',      // Design decision - visual focus
      'process',     // Process/workflow decision
      'strategic',   // Business/strategic
      'creative',    // Creative direction
    ]).default('technical'),
    
    // === FLEXIBLE CONTEXT ===
    /** Context and background (technical terminology) */
    context: z.string().optional(),
    
    /** Background information (general terminology) */
    background: z.string().optional(),
    
    /** Situation description (alternative terminology) */
    situation: z.string().optional(),
    
    // === ALTERNATIVES (Detailed Format) ===
    /** Alternative options with pros/cons analysis */
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
      /** Image for visual comparison (design decisions) */
      image: z.string().optional(),
      /** Additional notes */
      notes: z.string().optional(),
    })).optional(),
    
    // === OPTIONS CONSIDERED (Simple Format) ===
    /** Simple list of options considered (without pros/cons) */
    optionsConsidered: z.array(z.string()).optional(),
    
    // === REASONING ===
    /** Reasoning behind the decision (technical) */
    reasoning: z.string().optional(),
    
    /** Rationale for the decision (alternative terminology) */
    rationale: z.string().optional(),
    
    // === OUTCOME ===
    /** Decision outcome and follow-up */
    outcome: z.object({
      /** Current status of the decision */
      status: z.enum(['successful', 'mixed', 'revised', 'pending']).optional(),
      /** Summary of the outcome */
      summary: z.string().optional(),
      /** Lessons learned from this decision */
      lessonsLearned: z.array(z.string()).optional(),
    }).optional(),
    
    // === VISUAL SUPPORT ===
    /** Images supporting the decision */
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    
    // === META ===
    /** Optional tags for categorization */
    tags: z.array(z.string()).optional(),
    
    /** Related project slugs for cross-referencing */
    relatedProjects: z.array(z.string()).optional(),
    
    /** Related decision slugs for cross-referencing */
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

/**
 * Journey Timeline Collection
 * 
 * Career growth and learning progression timeline with milestones,
 * learning experiences, and career transitions.
 * 
 * Features:
 * - Three entry types (milestone, learning, transition)
 * - Skills/technologies per entry
 * - Optional expandable content
 */
const journeyCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/journey' }),
  schema: z.object({
    /** Date of the timeline entry */
    date: z.coerce.date(),
    
    /** Entry title */
    title: z.string(),
    
    /** Type of timeline entry */
    type: z.enum(['milestone', 'learning', 'transition']),
    
    /** Brief description */
    description: z.string(),
    
    /** Skills or technologies associated with this entry */
    skills: z.array(z.string()).optional(),
  }),
});

/**
 * Writing (Blog) Collection
 * 
 * Blog posts and technical articles with MDX support.
 * 
 * Features:
 * - Draft mode for unpublished content
 * - Publish and update dates
 * - Optional tags for categorization
 */
const writingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    /** Article title */
    title: z.string(),
    
    /** Article description for SEO and previews */
    description: z.string(),
    
    /** Original publication date */
    publishDate: z.coerce.date(),
    
    /** Last updated date (optional) */
    updatedDate: z.coerce.date().optional(),
    
    /** Tags for categorization */
    tags: z.array(z.string()).optional(),
    
    /** Whether the article is a draft (hidden from production) */
    draft: z.boolean().default(false),
  }),
});

/**
 * Uses Collection
 * 
 * Documentation of tools, technologies, and environment used in development workflow.
 * 
 * Features:
 * - Three categories (tools, stack, environment)
 * - Items with name, description, and optional URL
 * - Custom order for intentional presentation
 */
const usesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/uses' }),
  schema: z.object({
    /** Category for grouping */
    category: z.enum(['tools', 'stack', 'environment']),
    
    /** List of items in this category */
    items: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    })),
    
    /** Sort order within category */
    order: z.number(),
  }),
});

/**
 * Speaking/Talks Collection
 * 
 * Conference talks, meetup presentations, podcast appearances, and workshops.
 * 
 * Features:
 * - Five talk types (conference, meetup, podcast, workshop, webinar)
 * - Links to slides and video recordings
 * - Event information and location
 * - Optional topics and duration
 * - Featured flag for highlighting
 */
const speakingCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/speaking' }),
  schema: z.object({
    /** Talk title */
    title: z.string(),
    
    /** Talk description */
    description: z.string(),
    
    /** Event name */
    event: z.string(),
    
    /** Event website URL (optional) */
    eventUrl: z.string().url().optional(),
    
    /** Date of the talk */
    date: z.coerce.date(),
    
    /** Location (city, country, or "Online") */
    location: z.string(),
    
    /** Type of speaking engagement */
    type: z.enum(['conference', 'meetup', 'podcast', 'workshop', 'webinar']),
    
    /** Link to slides (optional) */
    slides: z.string().url().optional(),
    
    /** Link to video recording (optional) */
    video: z.string().url().optional(),
    
    /** Talk duration (e.g., "45 min", "1 hour") */
    duration: z.string().optional(),
    
    /** Topics covered in the talk */
    topics: z.array(z.string()).optional(),
    
    /** Whether to feature this talk */
    featured: z.boolean().default(false),
  }),
});

/**
 * Testimonials Collection
 * 
 * Endorsements and recommendations from colleagues and clients.
 * 
 * Features:
 * - Person details (name, role, company)
 * - Relationship context
 * - Quote text
 * - Optional LinkedIn profile link
 * - Featured flag for homepage display
 */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/testimonials' }),
  schema: z.object({
    /** Person's name */
    name: z.string(),
    
    /** Person's role/title */
    role: z.string(),
    
    /** Person's company */
    company: z.string(),
    
    /** Relationship context (e.g., "Worked together at Company X") */
    relationship: z.string(),
    
    /** Testimonial quote */
    quote: z.string(),
    
    /** LinkedIn profile URL (optional) */
    linkedin: z.string().url().optional(),
    
    /** Whether to feature on homepage */
    featured: z.boolean().default(false),
    
    /** Date of the testimonial */
    date: z.coerce.date(),
  }),
});

/**
 * Export all collections
 * 
 * This object is used by Astro to register all content collections
 * and generate TypeScript types for type-safe content queries.
 */
export const collections = {
  projects: projectsCollection,
  decisions: decisionsCollection,
  journey: journeyCollection,
  writing: writingCollection,
  uses: usesCollection,
  speaking: speakingCollection,
  testimonials: testimonialsCollection,
};
