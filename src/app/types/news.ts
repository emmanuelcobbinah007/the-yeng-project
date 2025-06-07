export interface NewsItem {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  shortDescription: string;
  fullStory: string;
  featured?: boolean;
  slug: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    imageSrc: "/assets/images/agenda/agenda1.jpg",
    title: "🌟 We Go Again! MICHAEL YENG WELCOMES YOU BACK TO SCHOOL!🎒",
    date: "June 1, 2025",
    shortDescription:
      "A new semester brings new goals, growth, and unforgettable memories. Let's make it count!",
    fullStory:
      "A new semester means new goals, new growth, and new memories. Let's make it count! 💪✨ Wishing you success, strength, and an amazing journey ahead. Whether you're returning with big dreams or fresh plans, I encourage you to embrace every opportunity and challenge that comes your way.\n\nEnjoy the experience and make this semester one to remember! 🌟\n\nBest Regards,\nMichael Yeng ✨",
    featured: true,
    slug: "welcome-back-message-june-2025",
  },
  {
    id: "2",
    imageSrc: "/assets/images/agenda/agenda2.jpg",
    title:
      "🎥 Michael Yeng’s Journey to Leadership 🌟 A Day in the Life of a UGSRC Hopeful",
    date: "June 2, 2025",
    shortDescription:
      "Go behind the scenes with Michael Yeng — vision, grit, and purpose on full display. 🎯👣",
    fullStory:
      `Ever wondered what drives a true student leader? 🧭💼 Dive into a day in the life of Michael Yeng — Hall President of Evandy Hall and UGSRC presidential hopeful — as he shares his journey, the values that guide him, and the real work it takes to represent students with purpose.\n\nFrom early morning meetings to late-night reflections, this video offers a raw and inspiring look at leadership in action. If you’ve ever doubted what commitment looks like, this is it.\n\n📺 Watch the full video here: [https://youtu.be/GVnLqOLCozw?si=b9Js8HKETsRp6sEs](https://youtu.be/GVnLqOLCozw?si=b9Js8HKETsRp6sEs)\n\n🔥 Don’t just support a candidate — understand the journey.\n\nBest Regards,\nMichael Yeng`,
    featured: false,
    slug: "michael-yeng-journey-to-leadership",
  },
  {
    id: "3",
    imageSrc: "/assets/images/agenda/agenda6.jpg",
    title:
      "🚐 MICHAEL YENG ENGAGES CAMPUS TRANSPORT UNIONS OVER FARE CONCERNS 💬",
    date: "May 30, 2025",
    shortDescription:
      "Michael Yeng petitions transport unions in response to rising student concerns about fare prices. 🎓💸",
    fullStory:
      "🚨 In direct response to growing student concerns over transport fare prices, Michael Yeng has officially petitioned the various transport unions operating on campus.\n\n🤝 After thorough deliberations and meaningful negotiations, the unions agreed to the proposal—bringing us one step closer to fair and affordable transport for all students.\n\n🙏 Students are encouraged to remain calm and hopeful as we await new developments in the coming days.\n\n📢 To Stay Updated, Stay Informed! 🗞️✨\n\nBest Regards,\nMichael Yeng",
    featured: true,
    slug: "transport-fare-negotiations",
  },
  {
    id: "4",
    imageSrc: "/assets/images/agenda/agenda4.jpg",
     title: "🧼 MICHAEL YENG SUPPORTS BUZSTOP BOYS WITH DONATION 🎁",
  date: "March 31, 2025",
  shortDescription:
    "Michael Yeng donated branded items to the Buzstop Boys during a cleanup exercise at Okponglo Junction. A show of solidarity and community impact. 💪🏽",
  fullStory:
    "🌟 Earlier today, UGSRC Presidential Hopeful and Evandy JCR President, Michael Yeng, joined the Buzstop Boys during their community cleanup exercise at Okponglo Junction.\n\n🎁 As part of the activity, Michael donated branded items in support of their efforts — a gesture that reflects his commitment to grassroots initiatives and student-led impact.\n\n🧼 The cleanup wasn’t just about sanitation; it was a celebration of civic responsibility, collaboration, and the power of young people taking charge of their environment.\n\n👏🏽 Michael’s presence and support reinforced his campaign's message of action, inclusion, and community-first leadership.\n\nBest Regards,\nTEAM YENG ❤️🌍",
  featured: false,
  slug: "michael-yeng-donates-to-buzstop-boys",
  },
  {
    id: "5",
    imageSrc: "/assets/images/agenda/agenda5.jpg",
    title: "🎙️ MICHAEL YENG FEATURED ON 3MUSIC TV 💫",
  date: "June 6, 2025",
  shortDescription:
    "Michael Yeng shares his story, vision, and values in a powerful 3Music TV interview. 📺✨",
  fullStory:
    "🔰 UGSRC Presidential Candidate Michael Yeng recently made an inspiring appearance on 3Music TV, where he engaged viewers with insight, energy, and purpose. The feature provided a platform for Michael to connect with students across the nation and share what truly drives his campaign.\n\n🎯 Key Highlights from the Interview:\n\n• His journey as Evandy Hall President – Michael reflected on his leadership milestones and his unwavering commitment to student-focused progress.\n\n• His bold vision for the UGSRC – From inclusive leadership to building systems that empower students, he laid out a clear and compelling roadmap for the future.\n\n🌟 It was more than just an interview — it was a testament to real leadership in motion.\n\n🎥 Stay tuned for more appearances and media engagements.\n\nBest Regards,\nTEAM YENG ❤️🎉",
  featured: true,
  slug: "michael-yeng-3music-tv-feature",
  },
  {
    id: "6",
    imageSrc: "/assets/images/agenda/agenda3.jpg",
     title: "🌙 MICHAEL YENG CELEBRATES EID WITH GMSA 🤝",
  date: "June 6, 2025",
  shortDescription:
    "Michael Yeng joined GMSA to celebrate Eid, promote unity, and support the community with heartfelt donations. 🌟",
  fullStory:
    "🌙 This Eid, UGSRC Presidential Candidate Michael Yeng celebrated with the Ghana Muslim Students Association (GMSA), marking the special occasion with a spirit of unity, gratitude, and generosity.\n\n🎁 As part of the celebration, Michael donated essential items to support the community, underscoring his belief in inclusive leadership that embraces all students — regardless of faith or background.\n\n🙏🏽 The event was a heartwarming reminder of the values that bind us: compassion, faith, and service to one another.\n\n💬 'A leader for all' isn't just a slogan — it's a principle Michael lives by.\n\nBest Regards,\nTEAM YENG ❤️🌟",
  featured: false,
  slug: "michael-yeng-eid-celebration-gmsa",
  },
];
