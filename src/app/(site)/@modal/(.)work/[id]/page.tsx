"use client";

import { WorkModal } from "@/components/WorkModal";
import IProject from "@/types/ProjectType";
import React, { useEffect, useState } from "react";
import { getOneProject } from "../../../../../../sanity/lib/query";

type Props = {};

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const [projectData, setProjectData] = useState<IProject>();
  useEffect(() => {
    const fetchProjectData = async (id: string) => {
      const data = await getOneProject(params.id);
      data && setProjectData(data);
    };
    params.id && fetchProjectData(params.id);
  }, [params.id]);

  return <WorkModal projectData={projectData} />;
};

export default ProjectPage;
