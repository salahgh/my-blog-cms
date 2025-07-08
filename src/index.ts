module.exports = {
    register(/* { strapi } */) {
        // Registration logic
    },

    bootstrap({ strapi }) {
        // Direct seeding logic - no external file needed
        setTimeout(async () => {
            try {
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
                        <p>Achieving fit requires:</p>
                        <ol>
                        <li><strong>Deep customer understanding:</strong> Know your target market intimately</li>
                        <li><strong>Rapid iteration:</strong> Build, measure, learn, and repeat quickly</li>
                        <li><strong>Focus on core value:</strong> Identify and enhance your unique value proposition</li>
                        <li><strong>Customer feedback loops:</strong> Maintain constant communication with users</li>
                        <li><strong>Patience and persistence:</strong> It often takes longer than expected</li>
                        </ol>
                        
                        <h3>Common Pitfalls to Avoid</h3>
                        <ul>
                        <li>Building features customers don't want</li>
                        <li>Targeting too broad a market initially</li>
                        <li>Ignoring customer feedback</li>
                        <li>Scaling before achieving fit</li>
                        <li>Confusing vanity metrics with meaningful indicators</li>
                        </ul>
                        
                        <h3>After Achieving Product-Market Fit</h3>
                        <p>Once you've achieved fit, focus on:</p>
                        <ul>
                        <li>Scaling your operations efficiently</li>
                        <li>Maintaining product quality as you grow</li>
                        <li>Expanding to adjacent markets carefully</li>
                        <li>Building sustainable competitive advantages</li>
                        </ul>
                        
                        <p>Product-market fit isn't a destination—it's an ongoing journey of understanding and serving your customers better than anyone else.</p>`,
                        read_time: 9,
                        featured: true,
                        views: 0,
                        meta_title: "Product-Market Fit: The Ultimate Startup Success Guide",
                        meta_description: "Master product-market fit with our comprehensive guide. Learn key indicators, measurement strategies, and how to achieve this crucial startup milestone.",
                        publishedAt: new Date()
                    },
                    {
                        title: "Startup Marketing on a Shoestring Budget",
                        slug: "startup-marketing-shoestring-budget",
                        excerpt: "Discover cost-effective marketing strategies that deliver real results. Learn how to build brand awareness, acquire customers, and grow your startup without breaking the bank.",
                        content: `<h2>Marketing Your Startup: Maximum Impact, Minimum Budget</h2>
                        
                        <p>Most startups face the same challenge: how to build awareness and acquire customers with limited resources. The good news is that creativity and strategy can often outperform big budgets. Here's how to market your startup effectively without breaking the bank.</p>
                        
                        <h3>Content Marketing: Your Secret Weapon</h3>
                        <p>Content marketing offers exceptional ROI for startups:</p>
                        <ul>
                        <li><strong>Blog regularly:</strong> Share insights, tutorials, and industry knowledge</li>
                        <li><strong>Create valuable resources:</strong> Guides, templates, and tools your audience needs</li>
                        <li><strong>Guest posting:</strong> Write for established publications in your industry</li>
                        <li><strong>Video content:</strong> Leverage platforms like YouTube and TikTok</li>
                        <li><strong>Podcasting:</strong> Start your own or appear as a guest on others</li>
                        </ul>
                        
                        <h3>Social Media Strategy</h3>
                        <p>Focus on platforms where your audience is most active:</p>
                        <ul>
                        <li><strong>LinkedIn:</strong> Perfect for B2B startups and thought leadership</li>
                        <li><strong>Twitter:</strong> Great for real-time engagement and industry conversations</li>
                        <li><strong>Instagram:</strong> Visual storytelling and behind-the-scenes content</li>
                        <li><strong>TikTok:</strong> Creative, authentic content that can go viral</li>
                        </ul>
                        
                        <h3>Community Building and Partnerships</h3>
                        <p>Build relationships that drive growth:</p>
                        <ul>
                        <li>Join relevant online communities and forums</li>
                        <li>Partner with complementary businesses</li>
                        <li>Attend industry events and meetups</li>
                        <li>Create your own community around your product</li>
                        <li>Collaborate with micro-influencers in your niche</li>
                        </ul>
                        
                        <h3>Email Marketing Excellence</h3>
                        <p>Email remains one of the highest ROI marketing channels:</p>
                        <ul>
                        <li>Build an email list from day one</li>
                        <li>Create valuable lead magnets</li>
                        <li>Segment your audience for personalized messaging</li>
                        <li>Automate onboarding and nurture sequences</li>
                        <li>Regular newsletters with genuine value</li>
                        </ul>
                        
                        <h3>SEO and Organic Growth</h3>
                        <p>Invest in long-term organic visibility:</p>
                        <ul>
                        <li>Research and target relevant keywords</li>
                        <li>Optimize your website for search engines</li>
                        <li>Create location-based content if relevant</li>
                        <li>Build quality backlinks through relationships</li>
                        <li>Focus on user experience and site speed</li>
                        </ul>
                        
                        <h3>Referral and Word-of-Mouth Programs</h3>
                        <p>Turn customers into advocates:</p>
                        <ul>
                        <li>Create formal referral programs with incentives</li>
                        <li>Make sharing easy with social proof</li>
                        <li>Exceed customer expectations consistently</li>
                        <li>Ask for reviews and testimonials</li>
                        <li>Showcase customer success stories</li>
                        </ul>
                        
                        <h3>Measuring and Optimizing</h3>
                        <p>Track what matters:</p>
                        <ul>
                        <li>Customer acquisition cost (CAC)</li>
                        <li>Lifetime value (LTV)</li>
                        <li>Conversion rates across channels</li>
                        <li>Engagement metrics</li>
                        <li>Return on marketing investment</li>
                        </ul>
                        
                        <p>Remember, the best marketing strategy is one that's consistently executed. Start with one or two channels, master them, then expand your efforts as you grow.</p>`,
                        read_time: 11,
                        featured: false,
                        views: 0,
                        meta_title: "Startup Marketing on a Shoestring Budget: Complete Guide",
                        meta_description: "Learn cost-effective marketing strategies for startups. Discover how to build brand awareness and acquire customers without breaking the bank.",
                        publishedAt: new Date()
                    },
                    {
                        title: "The Lean Startup Methodology: Build, Measure, Learn",
                        slug: "lean-startup-methodology-build-measure-learn",
                        excerpt: "Master the lean startup approach to building successful businesses. Learn how to validate ideas quickly, minimize waste, and iterate based on real customer feedback.",
                        content: `<h2>The Lean Startup: A Revolutionary Approach to Building Businesses</h2>
                        
                        <p>The lean startup methodology, popularized by Eric Ries, has transformed how entrepreneurs approach building new businesses. By focusing on validated learning and rapid iteration, startups can reduce risk and increase their chances of success.</p>
                        
                        <h3>Core Principles of Lean Startup</h3>
                        <p>The methodology is built on five fundamental principles:</p>
                        <ol>
                        <li><strong>Entrepreneurs are everywhere:</strong> Startups exist in all types of organizations</li>
                        <li><strong>Entrepreneurship is management:</strong> Startups need structured approaches</li>
                        <li><strong>Validated learning:</strong> Learning what customers want through experimentation</li>
                        <li><strong>Build-Measure-Learn:</strong> The core feedback loop for development</li>
                        <li><strong>Innovation accounting:</strong> Measuring progress in uncertain environments</li>
                        </ol>
                        
                        <h3>The Build-Measure-Learn Cycle</h3>
                        <p>This cycle is the heart of lean startup methodology:</p>
                        
                        <h4>Build</h4>
                        <ul>
                        <li>Create a Minimum Viable Product (MVP)</li>
                        <li>Focus on core features that test key assumptions</li>
                        <li>Build the smallest thing that provides learning</li>
                        <li>Prioritize speed over perfection</li>
                        </ul>
                        
                        <h4>Measure</h4>
                        <ul>
                        <li>Define clear metrics and success criteria</li>
                        <li>Collect data on customer behavior and feedback</li>
                        <li>Use both quantitative and qualitative measurements</li>
                        <li>Focus on actionable metrics, not vanity metrics</li>
                        </ul>
                        
                        <h4>Learn</h4>
                        <ul>
                        <li>Analyze data to validate or invalidate hypotheses</li>
                        <li>Make decisions based on evidence, not opinions</li>
                        <li>Determine whether to pivot or persevere</li>
                        <li>Apply learnings to the next iteration</li>
                        </ul>
                        
                        <h3>Types of MVPs</h3>
                        <p>Different MVPs serve different purposes:</p>
                        <ul>
                        <li><strong>Landing page MVP:</strong> Test demand with a simple webpage</li>
                        <li><strong>Wizard of Oz MVP:</strong> Manual processes behind automated-seeming interfaces</li>
                        <li><strong>Concierge MVP:</strong> Highly personalized, manual service delivery</li>
                        <li><strong>Prototype MVP:</strong> Basic functional version of your product</li>
                        <li><strong>Piecemeal MVP:</strong> Combine existing tools to deliver your solution</li>
                        </ul>
                        
                        <h3>Pivot vs. Persevere</h3>
                        <p>One of the hardest decisions in lean startup is knowing when to pivot:</p>
                        
                        <h4>Signs you might need to pivot:</h4>
                        <ul>
                        <li>Consistently missing growth targets</li>
                        <li>Low customer engagement or retention</li>
                        <li>Difficulty acquiring customers</li>
                        <li>Market feedback contradicts your assumptions</li>
                        </ul>
                        
                        <h4>Types of pivots:</h4>
                        <ul>
                        <li><strong>Customer segment pivot:</strong> Same solution, different market</li>
                        <li><strong>Problem pivot:</strong> Same market, different problem</li>
                        <li><strong>Solution pivot:</strong> Same problem, different solution</li>
                        <li><strong>Revenue model pivot:</strong> Same product, different monetization</li>
                        <li><strong>Platform pivot:</strong> App to platform or vice versa</li>
                        </ul>
                        
                        <h3>Innovation Accounting</h3>
                        <p>Traditional accounting doesn't work for startups. Innovation accounting focuses on:</p>
                        <ul>
                        <li>Learning milestones rather than traditional metrics</li>
                        <li>Cohort analysis to understand customer behavior</li>
                        <li>Split testing to validate assumptions</li>
                        <li>Customer development metrics</li>
                        <li>Progress toward product-market fit</li>
                        </ul>
                        
                        <h3>Common Lean Startup Mistakes</h3>
                        <ul>
                        <li>Building too much before testing</li>
                        <li>Focusing on vanity metrics</li>
                        <li>Not talking to customers enough</li>
                        <li>Pivoting too quickly or too slowly</li>
                        <li>Misunderstanding what \"minimum\" means in MVP</li>
                        </ul>
                        
                        <p>The lean startup methodology isn't just for tech companies—it's a mindset that can be applied to any new venture. By embracing uncertainty and focusing on learning, entrepreneurs can build better businesses with less waste and higher success rates.</p>`,
                        read_time: 13,
                        featured: true,
                        views: 0,
                        meta_title: "The Lean Startup Methodology: Complete Build-Measure-Learn Guide",
                        meta_description: "Master the lean startup methodology. Learn the Build-Measure-Learn cycle, MVP strategies, pivot decisions, and innovation accounting for startup success.",
                        publishedAt: new Date()
                    }
                ];

                // Check if testimonials already exist
                const existingTestimonials = await strapi.entityService.findMany('api::testimonial.testimonial');

                if (existingTestimonials.length === 0) {
                    console.log('🌱 Seeding testimonials...');

                    for (const testimonial of testimonials) {
                        await strapi.entityService.create('api::testimonial.testimonial', {
                            data: testimonial
                        });
                    }

                    console.log('✅ Testimonials seeded successfully!');
                } else {
                    console.log('📋 Testimonials already exist, skipping seed.');
                }

                // Check if FAQs already exist
                const existingFaqs = await strapi.entityService.findMany('api::faq.faq');

                if (existingFaqs.length === 0) {
                    console.log('🌱 Seeding FAQs...');

                    for (const faq of faqs) {
                        await strapi.entityService.create('api::faq.faq', {
                            data: faq
                        });
                    }

                    console.log('✅ FAQs seeded successfully!');
                } else {
                    console.log('📋 FAQs already exist, skipping seed.');
                }

                // Check if missions already exist
                const existingMissions = await strapi.entityService.findMany('api::mission.mission');

                if (existingMissions.length === 0) {
                    console.log('🌱 Seeding missions...');

                    for (const mission of missions) {
                        await strapi.entityService.create('api::mission.mission', {
                            data: mission
                        });
                    }

                    console.log('✅ Missions seeded successfully!');
                } else {
                    console.log('📋 Missions already exist, skipping seed.');
                }

                // Add this missing blog seeding logic:
                // Check if blogs already exist
                const existingBlogs = await strapi.entityService.findMany('api::blog.blog');

                if (existingBlogs.length === 0) {
                    console.log('🌱 Seeding blogs...');

                    for (const blog of blogs) {
                        await strapi.entityService.create('api::blog.blog', {
                            data: blog
                        });
                    }

                    console.log('✅ Blogs seeded successfully!');
                } else {
                    console.log('📋 Blogs already exist, skipping seed.');
                }
            } catch (error) {
                console.error('❌ Error seeding data:', error);
            }
        }, 2000); // Increased timeout to ensure Strapi is fully loaded
    },
};