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
    date: "June 6, 2025",
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
    date: "June 6, 2025",
    shortDescription:
      "Go behind the scenes with Michael Yeng — vision, grit, and purpose on full display. 🎯👣",
    fullStory:
      `Ever wondered what drives a true student leader? 🧭💼 Dive into a day in the life of Michael Yeng — Hall President of Evandy Hall and UGSRC presidential hopeful — as he shares his journey, the values that guide him, and the real work it takes to represent students with purpose.\n\nFrom early morning meetings to late-night reflections, this video offers a raw and inspiring look at leadership in action. If you’ve ever doubted what commitment looks like, this is it.\n\n📺 Watch the full video here: [https://youtu.be/GVnLqOLCozw?si=b9Js8HKETsRp6sEs](https://youtu.be/GVnLqOLCozw?si=b9Js8HKETsRp6sEs)\n\n🔥 Don’t just support a candidate — understand the journey.\n\nBest Regards,\nMichael Yeng`,
    featured: true,
    slug: "michael-yeng-journey-to-leadership",
  },
  {
    id: "3",
    imageSrc: "/assets/images/agenda/agenda6.jpg",
    title:
      "🚐 MICHAEL YENG ENGAGES CAMPUS TRANSPORT UNIONS OVER FARE CONCERNS 💬",
    date: "June 6, 2025",
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
    title: "Innovation Tech Hub Launch",
    date: "May 5, 2025",
    shortDescription:
      "Cutting-edge technology center opens to support student entrepreneurship and innovation.",
    fullStory:
      "The new Innovation Tech Hub represents a significant investment in student success and technological advancement. Equipped with state-of-the-art computers, 3D printers, virtual reality systems, and collaborative workspaces, this facility will serve as a catalyst for student innovation and entrepreneurship. The hub will host workshops, hackathons, and mentorship programs connecting students with industry professionals and successful alumni.",
    slug: "innovation-tech-hub-launch",
  },
  {
    id: "5",
    imageSrc: "/assets/images/agenda/agenda5.jpg",
    title: "Inter-Hall Sports Festival Highlights",
    date: "April 28, 2025",
    shortDescription:
      "Exciting competition and sportsmanship displayed at the annual sports festival.",
    fullStory:
      "The annual inter-hall sports festival concluded with unprecedented participation and enthusiasm. Over 1,000 students competed in various sporting events including football, basketball, volleyball, track and field, and traditional games. The festival not only promoted physical fitness and healthy competition but also strengthened bonds between different halls and created lasting friendships across campus.",
    slug: "inter-hall-sports-festival-highlights",
  },
  {
    id: "6",
    imageSrc: "/assets/images/agenda/agenda3.jpg",
    title: "Cultural Night Celebration",
    date: "April 22, 2025",
    shortDescription:
      "A vibrant celebration showcasing the rich cultural diversity of our student body.",
    fullStory:
      "Our cultural night celebration was a spectacular showcase of the diverse backgrounds and traditions that make our university community so vibrant. Students from different regions and countries presented traditional dances, music, fashion, and cuisine. The event fostered cross-cultural understanding and appreciation while creating an inclusive environment where every student feels valued and represented.",
    slug: "cultural-night-celebration",
  },
];
