"use client";

import { WorkModal } from "@/components/WorkModal";
import IProject from "@/types/ProjectType";
import React, { useEffect, useState } from "react";
import { getOneProject } from "../../../../../../../sanity/lib/query";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {};

const ProjectPage = ({
  params: { id, lng },
}: {
  params: { id: string; lng: string };
}) => {
  const [projectData, setProjectData] = useState<IProject>();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setModalOpen(true);
    const fetchProjectData = async (id: string) => {
      const data = await getOneProject(id);
      data && setProjectData(data);
    };
    id && fetchProjectData(id);
  }, [id]);

  return (
    <AnimatePresence
      initial={false}
      mode={"wait"}
      onExitComplete={() => router.back()}
    >
      {modalOpen && (
        <WorkModal
          projectData={projectData}
          handleClose={() => setModalOpen(false)}
          lng={lng}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectPage;
