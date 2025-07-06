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
            } catch (error) {
                console.error('❌ Error seeding data:', error);
            }
        }, 2000); // Increased timeout to ensure Strapi is fully loaded
    },
};