/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { FirstSubsectionFourth } from "../page";
import IProject from "@/types";
import { getAllProjects } from "../../../../sanity/lib/query";

export default function Work() {
  const [projects, setPorjects] = useState<IProject[]>([]);

  useEffect(() => {
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
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              W
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              r
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              -
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              {" "}
            </span>
          </span>
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              g
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              l
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              {" "}
            </span>
          </span>
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              p
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              r
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              u
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              s
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              ,
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              {" "}
            </span>
          </span>
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              d
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              a
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              {" "}
            </span>
          </span>
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              {" "}
            </span>
          </span>
          <span
            className="TextAnimateUp_word__Yvn5A"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translate3d(0px, 0%, 0px)",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
          >
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              x
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              e
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              c
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              u
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              t
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              i
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              o
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              n
            </span>
            <span
              style={{ display: "inline-block", whiteSpace: "pre", opacity: 1 }}
            >
              .
            </span>
          </span>
        </h1>
      </div>

      <FirstSubsectionFourth projects={projects} />
    </main>
  );
}
