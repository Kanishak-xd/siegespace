const projects = [
  {
    id: 1,
    name: "BHUTAN KEEPS↗",
    subtitle: "E-Commerce Website",
    description:
      "An E-Commerce website to browse & buy traditional Bhutanese fabrics",
    image: "images/p1.png",
    link: "https://kanishak-xd.github.io/Bhutan-Keeps/",
  },
  {
    id: 2,
    name: "RE:JAPANESE↗",
    subtitle: "Japanese Language Learning Website",
    description:
      "A website for learning Japanese language with free lessons and quizzes",
    image: "images/p2.png",
    link: "https://kanishak-xd.github.io/re-japanese/",
  },
  {
    id: 3,
    name: "RE:WUTHERING↗",
    subtitle: "Unofficial Game Website",
    description:
      "Explore world of Wuthering Waves including characters available",
    image: "images/p3.png",
    link: "https://kanishak-xd.github.io/re-wuthering/",
  },
  {
    id: 4,
    name: "THREAT-INTELLIGENCE↗",
    subtitle: "Threat Intelligence Dashboard Website",
    description:
      "A website with real-time data analysis, attack trend visualization and API integration in MERN stack",
    image: "images/p5.png",
    link: "https://github.com/Kanishak-xd/threat-intelligence/",
  },
  {
    id: 5,
    name: "AQUASOL↗",
    subtitle: "Smart Water Management App",
    description:
      "A mobile application for AQUASOL, an IoT based smart water management system",
    image: "images/p4.png",
    link: "https://github.com/Kanishak-xd/Aquasol",
  },
];

const projectList = document.getElementById("project-list");

// Dynamically generate project cards
projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  // Create anchor tag for linking
  const anchor = document.createElement("a");
  anchor.href = project.link;
  anchor.classList.add("project-link");
  anchor.target = "_blank"; // Open in new tab

  // Add image only if available
  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = `${project.name} image`;
    img.classList.add("project-image");
    anchor.appendChild(img);
  } else {
    // Placeholder for projects without images
    const placeholder = document.createElement("div");
    placeholder.classList.add("project-placeholder");
    placeholder.textContent = "No Image Available";
    anchor.appendChild(placeholder);
  }

  // Add project name
  const projectName = document.createElement("h3");
  projectName.textContent = project.name;
  projectName.classList.add("project-name");
  anchor.appendChild(projectName);

  // Add subtitle
  const projectSubtitle = document.createElement("p");
  projectSubtitle.textContent = project.subtitle;
  projectSubtitle.classList.add("project-subtitle");
  anchor.appendChild(projectSubtitle);

  // Add project description
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectDescription.classList.add("project-description");
  anchor.appendChild(projectDescription);

  // Append the anchor to the card and card to the project list
  card.appendChild(anchor);
  projectList.appendChild(card);
});

// Array to add items
const items = [
  {
    heading: "Consilio - The Design Club",
    image: "images/expach1.png",
    link: "",
    subtitle: "2024-25",
  },
  {
    heading: "Ingenuity Fest 2023",
    image: "images/expach2.png",
    link: "",
    subtitle: "2022-23",
  },
  {
    heading: "Student Affairs Committee",
    image: "images/expach3.png",
    link: "",
    subtitle: "2024-25",
  },
  {
    heading: "Exalt - The Gaming Club",
    image: "images/expach4.png",
    link: "",
    subtitle: "2023-25",
  },
  {
    heading: "Management",
    image: "images/expach5.png",
    link: "",
    subtitle: "2024",
  },
  {
    heading: "Japanese Language",
    image: "images/expach6.png",
    link: "",
    subtitle: "2022-25",
  },
];

// Function to dynamically create boxes
function populateItems(items) {
  const expList = document.querySelector(".exp-list");

  items.forEach((item) => {
    // Create a link element to wrap the box
    const linkElement = document.createElement("a");
    linkElement.href = item.link;
    linkElement.target = "_blank"; // Open in a new tab
    linkElement.classList.add("exp-box-link");

    // Create box container
    const box = document.createElement("div");
    box.classList.add("exp-box");

    // Create image element
    const imgElement = document.createElement("img");
    imgElement.classList.add("exp-image");
    imgElement.src = item.image;
    imgElement.alt = item.heading;

    // Create heading element
    const headingElement = document.createElement("h3");
    headingElement.classList.add("exp-heading");
    headingElement.textContent = item.heading;

    // Create subtitle element
    const subtitleElement = document.createElement("h4");
    subtitleElement.classList.add("exp-subtitle");
    subtitleElement.textContent = item.subtitle;

    // Append image first, then heading & subtitle to the box
    box.appendChild(imgElement);
    box.appendChild(headingElement);
    box.appendChild(subtitleElement);

    // Wrap the box in the link
    linkElement.appendChild(box);

    // Append the link to the exp-list
    expList.appendChild(linkElement);
  });
}

// Populate the exp-list with the items
populateItems(items);
