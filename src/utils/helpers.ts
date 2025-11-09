export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const generateInputId = (label: string): string => {
  return `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
};

export const filterProjectsByCategory = <T extends { category: string }>(
  projects: readonly T[],
  category: string,
): T[] => {
  if (category === "All") {
    return [...projects];
  }
  return projects.filter((project) => project.category === category);
};

export const isActiveRoute = (pathname: string, routePath: string): boolean => {
  return pathname === routePath;
};
