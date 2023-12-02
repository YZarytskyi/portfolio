import { PROJECT_TITLES } from "../constants";

export type ProjectTitleType = (typeof PROJECT_TITLES)[number];

export interface ProjectType {
  title: ProjectTitleType;
  description: string;
  mainImage: string;
  mobileImage: string;
  technologies: ReadonlyArray<string>;
  githubLink: string;
  liveLink: string;
}
