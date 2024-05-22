"use client";

import { WorkModal } from "@/components/WorkModal";
import IProject from "@/types/ProjectType";
import React, { useEffect, useState } from "react";
import { getOneProject } from "../../../../../../sanity/lib/query";
import { AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useGetCurrentLanguage } from "@/app/(site)/i18n/client";

const ProjectPage = ({ params: { id } }: { params: { id: string } }) => {
  const lng = useGetCurrentLanguage() as "ru" | "en";

  const [projectData, setProjectData] = useState<IProject>();
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const asPath = usePathname();
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
      onExitComplete={() => {
        router.back();
        router.forward();
      }}
    >
      {modalOpen && (
        <WorkModal
          projectData={projectData}
          handleClose={() => {
            setModalOpen(false);
            router.replace(asPath.replace(`/${projectData?.slug}`, ""));
          }}
          lng={lng}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectPage;
