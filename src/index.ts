module.exports = {
    register(/* { strapi } */) {
        // Registration logic
    },

    bootstrap({ strapi }) {
        // Direct seeding logic - no external file needed
        setTimeout(async () => {
            try {
                // Authors seeding (must be first for blog relations)
                const authors = [
                    {
                        name: "John Smith",
                        email: "john.smith@example.com",
                        bio: "Senior content strategist with 8+ years of experience in digital marketing and startup growth. Passionate about helping businesses scale through effective content marketing.",
                        social_links: {
                            twitter: "https://twitter.com/johnsmith",
                            linkedin: "https://linkedin.com/in/johnsmith",
                            github: "https://github.com/johnsmith"
                        }
                    },
                    {
                        name: "Sarah Johnson",
                        email: "sarah.johnson@example.com",
                        bio: "Marketing director and growth hacker specializing in SaaS and tech startups. Expert in conversion optimization and user acquisition strategies.",
                        social_links: {
                            twitter: "https://twitter.com/sarahjohnson",
                            linkedin: "https://linkedin.com/in/sarahjohnson"
                        }
                    },
                    {
                        name: "Mike Chen",
                        email: "mike.chen@example.com",
                        bio: "Startup founder turned content creator. Shares insights on entrepreneurship, product development, and building successful teams.",
                        social_links: {
                            twitter: "https://twitter.com/mikechen",
                            linkedin: "https://linkedin.com/in/mikechen",
                            website: "https://mikechen.dev"
                        }
                    }
                ];

                // Categories seeding (must be before blogs for relations)
                const categories = [
                    {
                        name: "Startup",
                        slug: "startup",
                        description: "Everything about building and scaling startups, from ideation to IPO.",
                        color: "#3B82F6",
                        featured: true,
                        order: 1,
                        meta_title: "Startup Articles and Guides",
                        meta_description: "Comprehensive startup guides covering fundraising, team building, product development, and growth strategies.",
                        publishedAt: new Date()
                    },
                    {
                        name: "Marketing",
                        slug: "marketing",
                        description: "Digital marketing strategies, growth hacking, and customer acquisition techniques.",
                        color: "#10B981",
                        featured: true,
                        order: 2,
                        meta_title: "Marketing Strategy and Growth",
                        meta_description: "Learn effective marketing strategies, growth hacking techniques, and customer acquisition methods.",
                        publishedAt: new Date()
                    },
                    {
                        name: "Technology",
                        slug: "technology",
                        description: "Latest trends in technology, software development, and digital innovation.",
                        color: "#8B5CF6",
                        featured: false,
                        order: 3,
                        meta_title: "Technology Trends and Innovation",
                        meta_description: "Stay updated with the latest technology trends, software development practices, and digital innovations.",
                        publishedAt: new Date()
                    },
                    {
                        name: "Business",
                        slug: "business",
                        description: "Business strategy, leadership, and entrepreneurship insights.",
                        color: "#F59E0B",
                        featured: true,
                        order: 4,
                        meta_title: "Business Strategy and Leadership",
                        meta_description: "Business strategy guides, leadership insights, and entrepreneurship advice for modern businesses.",
                        publishedAt: new Date()
                    }
                ];

                // Tags seeding (must be before blogs for relations)
                const tags = [
                    { name: "Fundraising", slug: "fundraising" },
                    { name: "Product Development", slug: "product-development" },
                    { name: "Team Building", slug: "team-building" },
                    { name: "Growth Hacking", slug: "growth-hacking" },
                    { name: "SEO", slug: "seo" },
                    { name: "Content Marketing", slug: "content-marketing" },
                    { name: "Social Media", slug: "social-media" },
                    { name: "Analytics", slug: "analytics" },
                    { name: "Conversion", slug: "conversion" },
                    { name: "Leadership", slug: "leadership" },
                    { name: "Innovation", slug: "innovation" },
                    { name: "Strategy", slug: "strategy" }
                ];

                // Services seeding
                const services = [
                    {
                        title: "Content Strategy & Creation",
                        description: "Comprehensive content strategy development and high-quality content creation that drives engagement and converts visitors into customers.",
                        gradientFrom: "#3B82F6",
                        gradientTo: "#1D4ED8",
                        featured: true,
                        order: 1,
                        tags: ["Content Marketing", "Strategy", "SEO"],
                        publishedAt: new Date()
                    },
                    {
                        title: "Social Media Management",
                        description: "Full-service social media management including content creation, community engagement, and performance analytics across all major platforms.",
                        gradientFrom: "#10B981",
                        gradientTo: "#047857",
                        featured: true,
                        order: 2,
                        tags: ["Social Media", "Content Marketing", "Analytics"],
                        publishedAt: new Date()
                    },
                    {
                        title: "SEO & Performance Marketing",
                        description: "Advanced SEO optimization and performance marketing campaigns designed to increase organic traffic and improve search engine rankings.",
                        gradientFrom: "#8B5CF6",
                        gradientTo: "#6D28D9",
                        featured: true,
                        order: 3,
                        tags: ["SEO", "Analytics", "Growth Hacking"],
                        publishedAt: new Date()
                    },
                    {
                        title: "Email Marketing Automation",
                        description: "Sophisticated email marketing campaigns with automation workflows that nurture leads and drive conversions throughout the customer journey.",
                        gradientFrom: "#F59E0B",
                        gradientTo: "#D97706",
                        featured: false,
                        order: 4,
                        tags: ["Email Marketing", "Automation", "Conversion"],
                        publishedAt: new Date()
                    },
                    {
                        title: "Brand Development & Design",
                        description: "Complete brand identity development including logo design, brand guidelines, and visual assets that create a memorable and professional brand presence.",
                        gradientFrom: "#EF4444",
                        gradientTo: "#DC2626",
                        featured: false,
                        order: 5,
                        tags: ["Branding", "Design", "Strategy"],
                        publishedAt: new Date()
                    },
                    {
                        title: "Analytics & Reporting",
                        description: "Comprehensive analytics setup and detailed reporting that provides actionable insights to optimize your marketing performance and ROI.",
                        gradientFrom: "#06B6D4",
                        gradientTo: "#0891B2",
                        featured: true,
                        order: 6,
                        tags: ["Analytics", "Reporting", "Strategy"],
                        publishedAt: new Date()
                    }
                ];

                // Projects seeding
                const projects = [
                    {
                        title: "E-commerce Growth Campaign",
                        slug: "ecommerce-growth-campaign",
                        category: "E-commerce",
                        description: "Comprehensive marketing campaign that increased online sales by 300% through strategic content marketing, social media advertising, and conversion optimization.",
                        metrics: "300% increase in sales, 150% boost in traffic",
                        ctaText: "View Case Study",
                        imagePosition: "left",
                        featured: true,
                        order: 1,
                        meta_title: "E-commerce Growth Campaign Case Study",
                        meta_description: "Learn how we helped an e-commerce business achieve 300% sales growth through strategic marketing campaigns.",
                        publishedAt: new Date()
                    },
                    {
                        title: "SaaS Startup Launch Strategy",
                        slug: "saas-startup-launch-strategy",
                        category: "SaaS",
                        description: "Complete go-to-market strategy for a B2B SaaS startup, including product positioning, content marketing, and lead generation campaigns.",
                        metrics: "500+ qualified leads, 50% conversion rate",
                        ctaText: "Learn More",
                        imagePosition: "right",
                        featured: true,
                        order: 2,
                        meta_title: "SaaS Startup Launch Strategy Case Study",
                        meta_description: "Discover how we helped a SaaS startup achieve successful market entry with strategic marketing and positioning.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Local Business Digital Transformation",
                        slug: "local-business-digital-transformation",
                        category: "Local Business",
                        description: "Digital transformation project that helped a traditional local business establish strong online presence and increase customer acquisition by 200%.",
                        metrics: "200% increase in customers, 80% online revenue growth",
                        ctaText: "See Results",
                        imagePosition: "left",
                        featured: false,
                        order: 3,
                        meta_title: "Local Business Digital Transformation",
                        meta_description: "See how we helped a local business achieve digital transformation and 200% customer growth.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Tech Startup Brand Development",
                        slug: "tech-startup-brand-development",
                        category: "Technology",
                        description: "Complete brand development and marketing strategy for a tech startup, from logo design to comprehensive digital marketing campaigns.",
                        metrics: "Brand recognition increased by 400%, 250% social media growth",
                        ctaText: "View Project",
                        imagePosition: "right",
                        featured: true,
                        order: 4,
                        meta_title: "Tech Startup Brand Development Project",
                        meta_description: "Complete brand development case study showing 400% increase in brand recognition for a tech startup.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Healthcare Marketing Campaign",
                        slug: "healthcare-marketing-campaign",
                        category: "Healthcare",
                        description: "Specialized healthcare marketing campaign focusing on patient education, trust building, and compliance with healthcare marketing regulations.",
                        metrics: "180% increase in patient inquiries, 95% satisfaction rate",
                        ctaText: "Read More",
                        imagePosition: "left",
                        featured: false,
                        order: 5,
                        meta_title: "Healthcare Marketing Campaign Success",
                        meta_description: "Healthcare marketing campaign that achieved 180% increase in patient inquiries while maintaining compliance.",
                        publishedAt: new Date()
                    }
                ];

                // Testimonials seeding
                const testimonials = [
                    {
                        testimonial: "Before subscribing to this service, our marketing was all over the place. We struggled with social media, our website traffic was low, and email campaigns barely got any response. Since joining, we've seen a 250% increase in organic traffic and our customer engagement has never been better.",
                        author: "Lyes OUAZZI",
                        role: "Digital Agency Owner",
                        avatar: "LO",
                        featured: true,
                        publishedAt: new Date(),
                    },
                    {
                        testimonial: "The transformation has been incredible. Their strategic approach helped us identify our target audience better and create content that actually converts. Our ROI has improved by 180% in just 6 months.",
                        author: "Sarah Johnson",
                        role: "Marketing Director",
                        avatar: "SJ",
                        featured: true,
                        publishedAt: new Date(),
                    },
                    {
                        testimonial: "Working with this team has been a game-changer for our startup. They helped us build a solid marketing foundation from scratch and our user acquisition costs dropped by 40%.",
                        author: "Mike Chen",
                        role: "Startup Founder",
                        avatar: "MC",
                        featured: false,
                        publishedAt: new Date(),
                    },
                    {
                        testimonial: "Their data-driven approach and attention to detail is unmatched. We've seen consistent growth month over month, and their reporting keeps us informed every step of the way.",
                        author: "Emma Williams",
                        role: "E-commerce Owner",
                        avatar: "EW",
                        featured: false,
                        publishedAt: new Date(),
                    },
                    {
                        testimonial: "The best investment we've made for our business. Their team understands our industry and delivered results that exceeded our expectations. Highly recommended!",
                        author: "David Rodriguez",
                        role: "CEO",
                        avatar: "DR",
                        featured: true,
                        publishedAt: new Date(),
                    },
                ];

                // FAQs seeding
                const faqs = [
                    {
                        question: "How does a subscription-based marketing service work?",
                        answer: "With our model, you pay a flat monthly fee for continuous marketing support. No contracts, no hidden fees—just expert marketing services tailored to your business needs.",
                        category: "subscription",
                        featured: true,
                        order: 1,
                        publishedAt: new Date()
                    },
                    {
                        question: "What's included in the subscription?",
                        answer: "Our subscription includes comprehensive marketing strategy development, content creation, social media management, email marketing campaigns, SEO optimization, performance analytics, and dedicated account management. You'll have access to our full team of marketing experts.",
                        category: "subscription",
                        featured: true,
                        order: 2,
                        publishedAt: new Date()
                    },
                    {
                        question: "Can I upgrade or change my plan?",
                        answer: "Absolutely! You can upgrade, downgrade, or modify your plan at any time. Changes take effect at the start of your next billing cycle, and we'll work with you to ensure a smooth transition that meets your evolving business needs.",
                        category: "plans",
                        featured: false,
                        order: 3,
                        publishedAt: new Date()
                    },
                    {
                        question: "How soon will I see results?",
                        answer: "While every business is different, most clients start seeing initial improvements within 30-60 days. Significant results typically become apparent within 90 days. We provide regular reporting so you can track progress and see the impact of our work on your business growth.",
                        category: "results",
                        featured: true,
                        order: 4,
                        publishedAt: new Date()
                    },
                    {
                        question: "How do I get started?",
                        answer: "Getting started is simple! Schedule a free consultation call where we'll discuss your business goals and challenges. After that, we'll create a customized marketing strategy and you can choose the subscription plan that best fits your needs. We can have you up and running within a week.",
                        category: "getting-started",
                        featured: true,
                        order: 5,
                        publishedAt: new Date()
                    },
                    {
                        question: "Can I change plans later?",
                        answer: "Yes, you have complete flexibility to change your plan whenever needed. Whether you want to scale up during busy seasons or adjust your services based on business growth, we make it easy to modify your subscription without any penalties or long-term commitments.",
                        category: "plans",
                        featured: false,
                        order: 6,
                        publishedAt: new Date()
                    }
                ];

                // Missions seeding
                const missions = [
                    {
                        title: "Mission",
                        description: "Empowering businesses through innovative content and filmmaking",
                        icon: "Users",
                        iconSrc: null,
                        featured: true,
                        order: 1,
                        publishedAt: new Date()
                    },
                    {
                        title: "Vision",
                        description: "Leading Algeria's creative industry with impactful video content",
                        icon: "Telescope",
                        iconSrc: null,
                        featured: true,
                        order: 2,
                        publishedAt: new Date()
                    },
                    {
                        title: "Signature",
                        description: "Where creativity meets strategy",
                        icon: "Wand2",
                        iconSrc: null,
                        featured: true,
                        order: 3,
                        publishedAt: new Date()
                    }
                ];

                // Blog posts seeding
                const blogs = [
                    {
                        title: "From Idea to IPO: The Complete Startup Journey",
                        slug: "from-idea-to-ipo-complete-startup-journey",
                        excerpt: "Discover the essential stages every startup must navigate, from initial concept validation to going public. Learn key strategies, common pitfalls, and success metrics for each phase.",
                        content: `<h2>The Startup Lifecycle: A Comprehensive Guide</h2>
                        
                        <p>Building a successful startup is like embarking on an epic journey filled with challenges, discoveries, and transformative moments. Understanding the key stages can help entrepreneurs navigate this complex path more effectively.</p>
                        
                        <h3>Stage 1: Ideation and Validation</h3>
                        <p>Every great startup begins with a problem worth solving. The ideation phase involves identifying market gaps, understanding customer pain points, and developing innovative solutions. Validation is crucial - test your assumptions early and often through customer interviews, surveys, and minimum viable products (MVPs).</p>
                        
                        <h3>Stage 2: Building and Launch</h3>
                        <p>Once validated, focus shifts to building your product and assembling your team. This stage requires careful resource management, agile development practices, and maintaining close customer feedback loops. Your first launch is just the beginning of an iterative improvement process.</p>
                        
                        <h3>Stage 3: Growth and Scaling</h3>
                        <p>With product-market fit achieved, the focus turns to sustainable growth. This involves optimizing your business model, expanding your team, and potentially seeking external funding. Key metrics become crucial for tracking progress and making data-driven decisions.</p>
                        
                        <h3>Stage 4: Maturity and Exit</h3>
                        <p>Successful startups eventually face decisions about their future - whether to remain independent, seek acquisition, or pursue an IPO. Each path requires different strategies and preparations, but all benefit from strong fundamentals built throughout the journey.</p>
                        
                        <p>Remember, every startup's journey is unique, but understanding these common stages can help you prepare for what lies ahead and make more informed decisions along the way.</p>`,
                        read_time: 8,
                        featured: true,
                        views: 0,
                        meta_title: "From Idea to IPO: The Complete Startup Journey Guide",
                        meta_description: "Learn the essential stages of startup development from ideation to IPO. Discover key strategies, metrics, and best practices for each phase of the entrepreneurial journey.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Fundraising 101: A Founder's Guide to Securing Investment",
                        slug: "fundraising-101-founders-guide-securing-investment",
                        excerpt: "Master the art of fundraising with this comprehensive guide covering everything from pitch decks to investor relations. Learn what investors look for and how to present your startup effectively.",
                        content: `<h2>The Fundraising Landscape: What Every Founder Needs to Know</h2>
                        
                        <p>Securing investment is often a critical milestone for startups looking to scale. However, fundraising is both an art and a science that requires careful preparation, strategic thinking, and compelling storytelling.</p>
                        
                        <h3>Understanding Investment Stages</h3>
                        <p>Different funding rounds serve different purposes:</p>
                        <ul>
                        <li><strong>Pre-seed:</strong> Early validation and initial development</li>
                        <li><strong>Seed:</strong> Product development and early market traction</li>
                        <li><strong>Series A:</strong> Scaling operations and expanding market reach</li>
                        <li><strong>Series B+:</strong> Rapid growth and market expansion</li>
                        </ul>
                        
                        <h3>Crafting Your Pitch Deck</h3>
                        <p>A compelling pitch deck should tell your startup's story in 10-15 slides, covering:</p>
                        <ul>
                        <li>Problem and solution</li>
                        <li>Market opportunity and size</li>
                        <li>Business model and traction</li>
                        <li>Team and competitive advantage</li>
                        <li>Financial projections and funding ask</li>
                        </ul>
                        
                        <h3>Building Investor Relationships</h3>
                        <p>Successful fundraising is about building relationships, not just presenting numbers. Start networking early, provide regular updates to potential investors, and always be transparent about challenges and opportunities.</p>
                        
                        <h3>Due Diligence Preparation</h3>
                        <p>Prepare for investor due diligence by organizing your legal documents, financial records, and operational metrics. Having a clean data room demonstrates professionalism and can accelerate the investment process.</p>
                        
                        <p>Remember, fundraising is a means to an end, not the end itself. Focus on building a sustainable business that creates real value for customers and stakeholders.</p>`,
                        read_time: 12,
                        featured: true,
                        views: 0,
                        meta_title: "Fundraising 101: Complete Guide to Startup Investment",
                        meta_description: "Master startup fundraising with our comprehensive guide. Learn about investment stages, pitch decks, investor relations, and due diligence preparation.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Building a Winning Startup Team: Hiring and Culture",
                        slug: "building-winning-startup-team-hiring-culture",
                        excerpt: "Learn how to attract top talent, build a strong company culture, and create a team that can execute your vision. Discover best practices for early-stage hiring and team development.",
                        content: `<h2>The Foundation of Success: Building Your Startup Team</h2>
                        
                        <p>Your team is your startup's most valuable asset. The right people can turn a good idea into a great company, while the wrong hires can derail even the most promising ventures. Here's how to build a winning team from the ground up.</p>
                        
                        <h3>Hiring for Early-Stage Startups</h3>
                        <p>Early hires are crucial because they'll shape your company's DNA. Look for:</p>
                        <ul>
                        <li><strong>Versatility:</strong> People who can wear multiple hats and adapt quickly</li>
                        <li><strong>Passion:</strong> Individuals who believe in your mission and vision</li>
                        <li><strong>Cultural fit:</strong> Team members who align with your values</li>
                        <li><strong>Growth mindset:</strong> People eager to learn and take on new challenges</li>
                        </ul>
                        
                        <h3>Creating a Strong Company Culture</h3>
                        <p>Culture isn't just about ping pong tables and free snacks. It's about:</p>
                        <ul>
                        <li>Defining clear values and living by them</li>
                        <li>Establishing transparent communication practices</li>
                        <li>Encouraging innovation and calculated risk-taking</li>
                        <li>Recognizing and rewarding contributions</li>
                        <li>Promoting work-life balance and employee wellbeing</li>
                        </ul>
                        
                        <h3>Equity and Compensation Strategies</h3>
                        <p>Startups often can't compete on salary alone, but they can offer equity and growth opportunities. Create fair and transparent compensation packages that align employee interests with company success.</p>
                        
                        <h3>Remote vs. In-Person Teams</h3>
                        <p>The modern startup landscape offers flexibility in team structure. Whether you choose remote, hybrid, or in-person, focus on clear communication, defined processes, and regular team building activities.</p>
                        
                        <h3>Scaling Your Team</h3>
                        <p>As you grow, maintain your culture while adapting your processes. Implement structured onboarding, regular performance reviews, and career development programs to retain top talent.</p>
                        
                        <p>Remember, building a great team is an ongoing process. Invest in your people, and they'll invest in your company's success.</p>`,
                        read_time: 10,
                        featured: false,
                        views: 0,
                        meta_title: "Building a Winning Startup Team: Hiring and Culture Guide",
                        meta_description: "Learn how to build a successful startup team. Discover best practices for hiring, creating company culture, compensation strategies, and scaling your team.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Product-Market Fit: The Holy Grail of Startups",
                        slug: "product-market-fit-holy-grail-startups",
                        excerpt: "Understand what product-market fit really means and how to achieve it. Learn the key indicators, measurement strategies, and common mistakes that prevent startups from reaching this crucial milestone.",
                        content: `<h2>Understanding Product-Market Fit: The Startup Success Indicator</h2>
                        
                        <p>Product-market fit is the moment when your product satisfies a strong market demand. It's the difference between struggling to find customers and having customers actively seek you out. Achieving this fit is often the make-or-break moment for startups.</p>
                        
                        <h3>What Product-Market Fit Looks Like</h3>
                        <p>You'll know you've achieved product-market fit when:</p>
                        <ul>
                        <li>Customers are actively using and recommending your product</li>
                        <li>You're seeing organic growth and word-of-mouth referrals</li>
                        <li>Customer retention rates are high and churn is low</li>
                        <li>You're struggling to keep up with demand</li>
                        <li>Customers would be very disappointed if your product disappeared</li>
                        </ul>
                        
                        <h3>Measuring Product-Market Fit</h3>
                        <p>Key metrics to track include:</p>
                        <ul>
                        <li><strong>Net Promoter Score (NPS):</strong> How likely customers are to recommend you</li>
                        <li><strong>Customer Lifetime Value (CLV):</strong> Long-term value of customer relationships</li>
                        <li><strong>Retention rates:</strong> How many customers continue using your product</li>
                        <li><strong>Usage frequency:</strong> How often customers engage with your product</li>
                        <li><strong>Sean Ellis test:</strong> What percentage would be \"very disappointed\" without your product</li>
                        </ul>
                        
                        <h3>The Path to Product-Market Fit</h3>
                        <p>Achieving product-market fit requires:</p>
                        <ul>
                        <li><strong>Deep customer understanding:</strong> Know your customers' pain points intimately</li>
                        <li><strong>Iterative development:</strong> Build, measure, learn, and repeat</li>
                        <li><strong>Focus on core value:</strong> Identify and double down on your unique value proposition</li>
                        <li><strong>Market validation:</strong> Continuously test assumptions with real customers</li>
                        </ul>
                        
                        <h3>Common Mistakes to Avoid</h3>
                        <p>Many startups fail to achieve product-market fit because they:</p>
                        <ul>
                        <li>Build features customers don't actually want</li>
                        <li>Focus on vanity metrics instead of meaningful engagement</li>
                        <li>Try to serve too broad a market initially</li>
                        <li>Ignore customer feedback or misinterpret data</li>
                        <li>Scale prematurely before achieving fit</li>
                        </ul>
                        
                        <p>Product-market fit isn't a destination—it's an ongoing process. Markets evolve, customer needs change, and successful companies continuously adapt to maintain their fit.</p>`,
                        read_time: 9,
                        featured: true,
                        views: 0,
                        meta_title: "Product-Market Fit: Complete Guide for Startups",
                        meta_description: "Learn what product-market fit means, how to measure it, and strategies to achieve this crucial startup milestone. Avoid common mistakes and build sustainable growth.",
                        publishedAt: new Date()
                    }
                ];

                // Seeding functions with proper error handling and relationship management
                
                // Seed Authors first (required for blog relations)
                const existingAuthors = await strapi.entityService.findMany('api::author.author');
                if (existingAuthors.length === 0) {
                    console.log('Seeding authors...');
                    const createdAuthors = [];
                    for (const author of authors) {
                        const createdAuthor = await strapi.entityService.create('api::author.author', {
                            data: author
                        });
                        createdAuthors.push(createdAuthor);
                    }
                    console.log('Authors seeded successfully!');
                } else {
                    console.log('Authors already exist, skipping seed.');
                }

                // Seed Categories (required for blog relations)
                const existingCategories = await strapi.entityService.findMany('api::category.category');
                if (existingCategories.length === 0) {
                    console.log('Seeding categories...');
                    const createdCategories = [];
                    for (const category of categories) {
                        const createdCategory = await strapi.entityService.create('api::category.category', {
                            data: category
                        });
                        createdCategories.push(createdCategory);
                    }
                    console.log('Categories seeded successfully!');
                } else {
                    console.log('Categories already exist, skipping seed.');
                }

                // Seed Tags (required for blog relations)
                const existingTags = await strapi.entityService.findMany('api::tag.tag');
                if (existingTags.length === 0) {
                    console.log('Seeding tags...');
                    const createdTags = [];
                    for (const tag of tags) {
                        const createdTag = await strapi.entityService.create('api::tag.tag', {
                            data: tag
                        });
                        createdTags.push(createdTag);
                    }
                    console.log('Tags seeded successfully!');
                } else {
                    console.log('Tags already exist, skipping seed.');
                }

                // Seed Services
                const existingServices = await strapi.entityService.findMany('api::service.service');
                if (existingServices.length === 0) {
                    console.log('Seeding services...');
                    for (const service of services) {
                        await strapi.entityService.create('api::service.service', {
                            data: service
                        });
                    }
                    console.log('Services seeded successfully!');
                } else {
                    console.log('Services already exist, skipping seed.');
                }

                // Seed Projects
                const existingProjects = await strapi.entityService.findMany('api::project.project');
                if (existingProjects.length === 0) {
                    console.log('Seeding projects...');
                    for (const project of projects) {
                        await strapi.entityService.create('api::project.project', {
                            data: project
                        });
                    }
                    console.log('Projects seeded successfully!');
                } else {
                    console.log('Projects already exist, skipping seed.');
                }

                // Seed Testimonials
                const existingTestimonials = await strapi.entityService.findMany('api::testimonial.testimonial');
                if (existingTestimonials.length === 0) {
                    console.log('Seeding testimonials...');
                    for (const testimonial of testimonials) {
                        await strapi.entityService.create('api::testimonial.testimonial', {
                            data: testimonial
                        });
                    }
                    console.log('Testimonials seeded successfully!');
                } else {
                    console.log('Testimonials already exist, skipping seed.');
                }

                // Seed FAQs
                const existingFaqs = await strapi.entityService.findMany('api::faq.faq');
                if (existingFaqs.length === 0) {
                    console.log('Seeding FAQs...');
                    for (const faq of faqs) {
                        await strapi.entityService.create('api::faq.faq', {
                            data: faq
                        });
                    }
                    console.log('FAQs seeded successfully!');
                } else {
                    console.log('FAQs already exist, skipping seed.');
                }

                // Seed Missions
                const existingMissions = await strapi.entityService.findMany('api::mission.mission');
                if (existingMissions.length === 0) {
                    console.log('Seeding missions...');
                    for (const mission of missions) {
                        await strapi.entityService.create('api::mission.mission', {
                            data: mission
                        });
                    }
                    console.log('Missions seeded successfully!');
                } else {
                    console.log('Missions already exist, skipping seed.');
                }

                // Add this missing blog seeding logic:
                // Check if blogs already exist
                const existingBlogs = await strapi.entityService.findMany('api::blog.blog');

                if (existingBlogs.length === 0) {
                    console.log('Seeding blogs...');
                    
                    // Get created authors, categories, and tags for relations
                    const allAuthors = await strapi.entityService.findMany('api::author.author');
                    const allCategories = await strapi.entityService.findMany('api::category.category');
                    const allTags = await strapi.entityService.findMany('api::tag.tag');
                    
                    for (let i = 0; i < blogs.length; i++) {
                        const blog = blogs[i];
                        
                        // Assign relations
                        const blogWithRelations = {
                            ...blog,
                            author: allAuthors[i % allAuthors.length]?.id,
                            category: allCategories[i % allCategories.length]?.id,
                            tags: allTags.slice(i * 2, (i * 2) + 3).map(tag => tag.id) // Assign 2-3 tags per blog
                        };
                        
                        await strapi.entityService.create('api::blog.blog', {
                            data: blogWithRelations
                        });
                    }
                    console.log('Blogs seeded successfully!');
                } else {
                    console.log('Blogs already exist, skipping seed.');
                }

                console.log('All seeding completed successfully!');

            } catch (error) {
                console.error('Error during seeding:', error);
            }
        }, 3000); // Increased timeout to ensure Strapi is fully loaded
    },
};