"use client";
import { useEffect, useState } from "react";
import IProject from "@/types";
import {
  getAllProjects,
  getWorkPageContent,
} from "../../../../sanity/lib/query";
import WorkCard from "@/components/WorkCard";
import { WorkGrid, WorkGridRow } from "@/components/WorkGrid";
import AnimatedCharacters from "@/components/AnimatedText";
import { useGetCurrentLanguage } from "../i18n/client";

export default function Work() {
  const lng = useGetCurrentLanguage() as "ru" | "en";

  const [projects, setPorjects] = useState<IProject[]>([]);
  const [headingText, setHeadingText] = useState("");
  const textMap = headingText?.split(" ");

  useEffect(() => {
    const fetchAllProjects = async () => {
      const projects = await getAllProjects();
      setPorjects(projects);
    };
    const fetchWorkPageHeading = async () => {
      const headingText = await getWorkPageContent();
      setHeadingText(
        headingText.headingText?.[lng] ?? headingText.headingText?.ru
      );
      if (!headingText) {
        setHeadingText("World-class digital products, idea to execution.");
      }
    };

    fetchAllProjects();
    fetchWorkPageHeading();
  }, [lng]);

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
            --theme-navbar-button-active: var(--theme-primary)
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
        {/* <AnimatedText2
          el="h1"
          text={[headingText]}
          className="layout_work-header__heading__HhhhV"
          repeatDelay={10000}
          once={true}
        /> */}
      </div>

      <FirstSubsectionFourth projects={projects} lng={lng} />
    </main>
  );
}
const FirstSubsectionFourth = ({
  projects,
  lng,
}: {
  projects: IProject[];
  lng: "ru" | "en";
}) => {
  return (
    <WorkGrid>
      {projects.map((project: IProject, index: number) => {
        return (
          <>
            {index % 3 === 0 ? (
              <WorkGridRow key={index}>
                <WorkCard project={project} lng={lng} />
              </WorkGridRow>
            ) : index % 3 === 1 ? (
              <WorkGridRow isPortrait key={index}>
                <WorkCard project={project} isPortrait lng={lng} />
                <WorkCard project={projects[index + 1]} isPortrait lng={lng} />
              </WorkGridRow>
            ) : null}
          </>
        );
      })}
    </WorkGrid>
  );
};
