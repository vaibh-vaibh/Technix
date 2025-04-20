
export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Get navbar height to offset scroll position
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    const sectionPosition = section.offsetTop;
    
    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: 'smooth'
    });
  }
};

export const handleNavLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>, 
  sectionId: string,
  toggleMenu?: () => void
) => {
  e.preventDefault();
  scrollToSection(sectionId);
  
  // Close mobile menu if it's open
  if (toggleMenu) {
    toggleMenu();
  }
};
