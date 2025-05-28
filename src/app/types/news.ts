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
    title: "New Campus Initiative Announced",
    date: "May 20, 2025",
    shortDescription:
      "A comprehensive plan to transform campus sustainability and student experience.",
    fullStory:
      "Today marks a pivotal moment in our campaign as we unveil a comprehensive campus initiative designed to revolutionize student life at the University of Ghana. This initiative encompasses sustainable practices, enhanced recreational facilities, and improved academic support systems. Through collaborative efforts with faculty, staff, and fellow students, we aim to create an environment where every student can thrive academically and personally. The plan includes new green spaces, upgraded technology infrastructure, and expanded mental health resources.",
    featured: true,
    slug: "new-campus-initiative-announced",
  },
  {
    id: "2",
    imageSrc: "/assets/images/agenda/agenda2.jpg",
    title: "Student Town Hall Meeting Success",
    date: "May 15, 2025",
    shortDescription:
      "Record attendance at our recent town hall discussing student concerns and solutions.",
    fullStory:
      "Our recent student town hall meeting exceeded all expectations with over 500 students in attendance, representing the largest student gathering in recent years. Students voiced their concerns about academic resources, campus security, dining options, and recreational facilities. We presented detailed action plans addressing each concern, including proposals for extended library hours, enhanced security measures, improved meal plans, and new sports facilities. The overwhelming positive response and constructive feedback received will directly influence our policy implementations.",
    featured: true,
    slug: "student-town-hall-meeting-success",
  },
  {
    id: "3",
    imageSrc: "/assets/images/agenda/agenda6.jpg",
    title: "Community Volunteer Drive Success",
    date: "May 10, 2025",
    shortDescription:
      "Students unite for community service, making a real difference in local neighborhoods.",
    fullStory:
      "This weekend's community volunteer drive showcased the incredible spirit of University of Ghana students as over 200 volunteers participated in various community service projects. Activities included environmental cleanup, tutoring local children, supporting elderly community members, and assisting in local food distribution programs. This initiative demonstrates our commitment to being responsible global citizens and making a positive impact beyond our campus boundaries.",
    featured: true,
    slug: "community-volunteer-drive-success",
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