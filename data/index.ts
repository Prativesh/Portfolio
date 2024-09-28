export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Notification Service",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Threads",
    des: "Developed a social media app similar to threads using MERN",
    img: "/threads.png",
    iconLists: ["/mongo.svg", "/express.svg", "/re.svg", "/next.svg", "/tail.svg"],
    link: "https://threads-mu-three.vercel.app/",
  },
  {
    id: 2,
    title: "Brainwave AI",
    des: "Developed homepage for a modern AI website using Three.js and ReactJS",
    img: "/brainwave.svg",
    iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://brainwave-zeta-liard.vercel.app/",
  },
  {
    id: 3,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone-15-six.vercel.app/",
  },
  {
    id: 4,
    title: "Aora",
    des: "A video uploading and sharing app using React Native",
    img: "/aora.svg",
    iconLists: ["/re.svg", "/tail.svg", "/appwrite.svg", "/expo.svg"],
    link: "https://github.com/Prativesh/Video-App",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Android Developer - Juleo",
    desc: "Led the development of juleo's android app from scratch",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer - Amazon",
    desc: "Worked as part of Amazon Music team for managing and improving the catalog ingestion system.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Developer - Amazon",
    desc: "Worked as part of Amazon Warehouses team to automate the proess of charging sellers for various fee types like processing, transportation and storage",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Android Developer - Samsung",
    desc: "Developed and maintained various trackers of samsung health app for watch-4 & 5",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img:  "/phone.svg",
    link: "tel:+918607700977",
    hoverText: "+91 8607700977"
  },
  {
    id: 2,
    img:"/gmail.svg",
    link: "mailto:aryaprativesh@gmail.com",
    hoverText:"aryaprativesh@gmail.com"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/prativesh-arya-b77543173",
    hoverText: "LinkedIn"
  },
];