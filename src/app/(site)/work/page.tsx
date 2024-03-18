/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import IProject from "@/types";
import { getAllProjects } from "../../../../sanity/lib/query";
import Link from "next/link";
import Parallax from "@/components/Parallax";
import WorkCard from "@/components/WorkCard";
import { WorkGrid, WorkGridRow } from "@/components/WorkGrid";
import AnimatedCharacters from "@/components/AnimatedText";

export default function Work() {
  const [projects, setPorjects] = useState<IProject[]>([]);
  const [headingText, setHeadingText] = useState("");
  const textMap = headingText?.split(" ");

  useEffect(() => {
    setHeadingText("World-class digital products, idea to execution.");
    const fetchAllProjects = async () => {
      const projects = await getAllProjects();
      setPorjects(projects);
    };

    fetchAllProjects();
  }, []);

  return (
    <main className="layout_work-page__yja2T">
      <style>
        {`:root{
            --theme-primary: var(--default-primary);
            --theme-primary-text: var(--default-primary-text);
            --theme-secondary: var(--default-secondary);
            --theme-text: var(--default-text);
            --theme-background: var(--default-tertiary);
            --theme-logo: var(--default-secondary);
            --theme-header-face: var(--default-primary);
        }`}
      </style>
      <div className="layout_work-header__q0X91">
        <h1 className="layout_work-header__heading__HhhhV">
          {!!headingText &&
            textMap &&
            textMap?.map((line, index) => {
              return <AnimatedCharacters text={line} key={index} />;
            })}
        </h1>
      </div>

      <FirstSubsectionFourth projects={projects} />
    </main>
  );
}
const FirstSubsectionFourth = ({ projects }: { projects: IProject[] }) => {
  return (
    <WorkGrid>
      {projects.map((project: IProject, index: number) => {
        return (
          <>
            {index % 3 === 0 ? (
              <WorkGridRow key={index}>
                <WorkCard project={project} />
              </WorkGridRow>
            ) : index % 3 === 1 ? (
              <WorkGridRow isPortrait key={index}>
                <WorkCard project={project} isPortrait />
                <WorkCard project={projects[index + 1]} isPortrait />
              </WorkGridRow>
            ) : null}
          </>
        );
      })}
    </WorkGrid>
  );
};
