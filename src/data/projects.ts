export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  skills: string[];
  link?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Luxury Brand Identity",
    description: "A comprehensive brand identity for a high-end watch manufacturer, including logo design, typography, color palette, and brand guidelines. The project aimed to convey elegance, craftsmanship, and timeless design that reflects the quality of their timepieces.",
    thumbnail: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Brand Identity", "Logo Design", "Typography", "Brand Guidelines"],
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    description: "A complete redesign of an e-commerce platform that specializes in vintage watches. The project included UX research, information architecture, wireframing, and high-fidelity mockups to create an intuitive and visually appealing shopping experience.",
    thumbnail: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["UI/UX Design", "Web Design", "Wireframing", "Prototyping"],
    link: "#"
  },
  {
    id: 3,
    title: "Photography Exhibition Catalog",
    description: "Design and layout for a photography exhibition catalog featuring timepieces throughout history. The project involved art direction, layout design, typography, and print production to create a visually stunning publication.",
    thumbnail: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Print Design", "Editorial Design", "Typography", "Art Direction"],
    link: "#"
  },
  {
    id: 4,
    title: "Mobile App UI Design",
    description: "UI design for a mobile app that helps users track and manage their watch collection. The project included creating a design system, user flows, interactive prototypes, and detailed screen designs.",
    thumbnail: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Mobile UI Design", "UX Design", "Prototyping", "Design System"],
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Campaign",
    description: "A comprehensive social media campaign for a watch brand launch, including visual content creation, story templates, and promotional graphics designed to build brand awareness and drive engagement across multiple platforms.",
    thumbnail: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Social Media Graphics", "Digital Marketing", "Visual Content", "Brand Strategy"],
    link: "#"
  },
  {
    id: 6,
    title: "Watch Packaging Design",
    description: "Custom packaging design for a limited edition watch collection, including box design, inserts, certificates, and supporting materials. The project focused on creating an unboxing experience that reflects the quality and exclusivity of the product.",
    thumbnail: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Packaging Design", "Product Design", "3D Modeling", "Print Production"],
    link: "#"
  },
  {
    id: 7,
    title: "Annual Report Design",
    description: "Design and layout for a luxury watchmaker's annual report, combining data visualization, photography, and typography to communicate the company's achievements and financial performance in an engaging and visually appealing format.",
    thumbnail: "https://images.pexels.com/photos/158741/pexels-photo-158741.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/158741/pexels-photo-158741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Editorial Design", "Data Visualization", "Typography", "Print Design"],
    link: "#"
  },
  {
    id: 8,
    title: "Event Branding",
    description: "Complete branding and visual identity for a major watch industry trade show, including logo design, signage, promotional materials, digital assets, and event collateral designed to create a cohesive and memorable brand experience.",
    thumbnail: "https://images.pexels.com/photos/9979905/pexels-photo-9979905.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/9979905/pexels-photo-9979905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Event Branding", "Environmental Graphics", "Print Design", "Digital Design"],
    link: "#"
  },
  {
    id: 9,
    title: "Interactive Lookbook",
    description: "Design and development of an interactive digital lookbook for a watch collection, featuring rich media, animations, and engaging user interactions to showcase product details and storytelling in an immersive format.",
    thumbnail: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Interactive Design", "Web Design", "Animation", "Visual Storytelling"],
    link: "#"
  },
  {
    id: 10,
    title: "Brand Style Guide",
    description: "Development of a comprehensive brand style guide for a watchmaker, documenting logo usage, typography, color palettes, photography style, iconography, and application examples to ensure brand consistency across all touchpoints.",
    thumbnail: "https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Brand Guidelines", "Visual Identity", "Typography", "Document Design"],
    link: "#"
  },
  {
    id: 11,
    title: "Product Photography",
    description: "Art direction and styling for a product photography shoot featuring luxury watches, including composition, lighting design, and post-processing to create high-quality visuals for marketing campaigns and e-commerce.",
    thumbnail: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Photography Art Direction", "Studio Photography", "Photo Editing", "Visual Composition"],
    link: "#"
  },
  {
    id: 12,
    title: "Magazine Advertisement",
    description: "Design of a series of premium magazine advertisements for a luxury watch brand, focusing on visual storytelling, typography, and high-quality imagery to capture attention and convey brand values in print media.",
    thumbnail: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=300",
    image: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    skills: ["Print Advertising", "Visual Design", "Copywriting", "Brand Communication"],
    link: "#"
  }
];