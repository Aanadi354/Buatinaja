"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, NavArrowDown, Plus, Xmark } from "iconoir-react";
import styles from "./projects-section.module.css";

const projects = [
  {
    id: "go-barber",
    category: "Booking platform",
    name: "Go Barber",
    description:
      "A barbershop web experience centered on service discovery and a simple appointment-booking flow.",
    focus: ["Service catalogue", "Appointment booking", "Responsive web"],
  },
  {
    id: "sinko-maintenance",
    category: "Enterprise operations",
    name: "ERP Maintenance PT Sinko Prima Alloy",
    description:
      "A maintenance workspace concept for keeping equipment, work orders, and operational schedules easy to review.",
    focus: ["ERP workflow", "Maintenance tracking", "Operations dashboard"],
  },
  {
    id: "ramen-master",
    category: "Corporate website",
    name: "Website PT Ramen Master Indonesia",
    description:
      "A responsive restaurant brand experience that gives visitors a clear path to explore the menu and company.",
    focus: ["Brand website", "Restaurant showcase", "Responsive web"],
  },
];

function GoBarberPreview() {
  return (
    <div className={`${styles.mockScreen} ${styles.barberScreen}`}>
      <div className={styles.browserBar}><i /><i /><i /><span>gobarber / booking</span></div>
      <div className={styles.barberNav}>
        <strong><span className={styles.barberMark}>G</span> GO BARBER</strong>
        <span>Services&nbsp;&nbsp; Our barbers&nbsp;&nbsp; About</span>
        <b>Book now <ArrowUpRight aria-hidden="true" className={styles.mockIcon} /></b>
      </div>
      <div className={styles.barberHero}>
        <div>
          <span className={styles.mockEyebrow}>YOUR NEXT GREAT CUT</span>
          <strong>Good hair.<br />Good day.</strong>
          <p>Find your style and book a time that works.</p>
          <span className={styles.darkAction}>Explore services <ArrowUpRight aria-hidden="true" className={styles.mockIcon} /></span>
        </div>
        <div className={styles.barberPortrait} aria-hidden="true">
          <span className={styles.portraitHead} />
          <span className={styles.portraitBody} />
          <span className={styles.portraitChair} />
        </div>
      </div>
      <div className={styles.barberServices}>
        <span><i>01</i><b>Classic cut</b><small>45 min</small></span>
        <span><i>02</i><b>Beard trim</b><small>30 min</small></span>
        <span><i>03</i><b>Cut &amp; style</b><small>60 min</small></span>
      </div>
    </div>
  );
}

function SinkoPreview() {
  return (
    <div className={`${styles.mockScreen} ${styles.sinkoScreen}`}>
      <div className={styles.sinkoSidebar}>
        <div className={styles.sinkoBrand}><span className={styles.sinkoMark}>S</span><b>SINKO</b></div>
        <small>WORKSPACE</small>
        <span className={styles.sinkoNavActive}>Overview</span>
        <span>Work orders</span>
        <span>Equipment</span>
        <span>Schedules</span>
        <span>Reports</span>
        <div className={styles.sinkoProfile}><i>AR</i><span><b>Alex R.</b><small>Maintenance</small></span></div>
      </div>
      <div className={styles.sinkoMain}>
        <div className={styles.sinkoTop}><span>Maintenance / Overview</span><b>Today, 24 Oct <NavArrowDown aria-hidden="true" className={styles.mockIcon} /></b></div>
        <div className={styles.sinkoHeading}><span><small>MONDAY, OCTOBER 24</small><strong>Maintenance overview</strong></span><b><Plus aria-hidden="true" className={styles.mockIcon} /> New work order</b></div>
        <div className={styles.sinkoMetrics}>
          <span><small>Open work orders</small><b>18 <i>+3</i></b><em>Across all facilities</em></span>
          <span><small>Equipment online</small><b>96.8%</b><em><i /> System availability</em></span>
          <span><small>Due this week</small><b>07</b><em>Preventive maintenance</em></span>
        </div>
        <div className={styles.sinkoTable}>
          <div className={styles.tableTitle}><b>Recent work orders</b><span>View all&nbsp; <ArrowUpRight aria-hidden="true" className={styles.mockIcon} /></span></div>
          <div className={styles.tableHead}><span>WORK ORDER</span><span>EQUIPMENT</span><span>PRIORITY</span><span>STATUS</span></div>
          <div className={styles.tableRow}><b>WO-2048</b><span>Hydraulic press 04</span><i>High</i><em>In progress</em></div>
          <div className={styles.tableRow}><b>WO-2047</b><span>Cooling pump 12</span><i>Normal</i><em>Scheduled</em></div>
          <div className={styles.tableRow}><b>WO-2046</b><span>Conveyor line B</span><i>Normal</i><em>Review</em></div>
        </div>
      </div>
    </div>
  );
}

function RamenPreview() {
  return (
    <div className={`${styles.mockScreen} ${styles.ramenScreen}`}>
      <div className={styles.browserBar}><i /><i /><i /><span>ramenmaster.co.id</span></div>
      <div className={styles.ramenNav}><b>RAMEN<span>MASTER</span></b><span>Our story&nbsp;&nbsp;&nbsp; Menu&nbsp;&nbsp;&nbsp; Locations</span><strong>Find a table&nbsp; <ArrowUpRight aria-hidden="true" className={styles.mockIcon} /></strong></div>
      <div className={styles.ramenHero}>
        <span className={styles.ramenCopy}><small>JAPANESE CRAFT. INDONESIAN SOUL.</small><b>A bowl worth<br />coming back for.</b><i>Thoughtful ingredients. Rich broth. Made fresh, every day.</i><strong>Discover our menu&nbsp; <ArrowUpRight aria-hidden="true" className={styles.mockIcon} /></strong></span>
        <div className={styles.ramenBowl} aria-hidden="true"><span className={styles.bowlBroth}><i /><i /><i /><b /></span><span className={styles.bowlRim} /><span className={styles.bowlBase} /></div>
        <span className={styles.ramenStamp}>MADE<br />WITH<br />CARE</span>
      </div>
      <div className={styles.ramenFoot}><span>01 — OUR SIGNATURE</span><b>Find your new favorite.</b><span>SCROLL TO EXPLORE <NavArrowDown aria-hidden="true" className={styles.mockIcon} /></span></div>
    </div>
  );
}

function ProjectPreview({ projectId }: { projectId: string }) {
  if (projectId === "go-barber") return <GoBarberPreview />;
  if (projectId === "sinko-maintenance") return <SinkoPreview />;
  return <RamenPreview />;
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [openProject, setOpenProject] = useState<(typeof projects)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (openProject && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [openProject]);

  useEffect(() => {
    const stories = Array.from(document.querySelectorAll<HTMLElement>("[data-project-story]"));
    let frame = 0;

    function updateActiveProject() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const readingLine = window.innerHeight * 0.52;
        let closestStory: HTMLElement | undefined;
        let closestDistance = Number.POSITIVE_INFINITY;

        for (const story of stories) {
          const bounds = story.getBoundingClientRect();
          const distance = Math.abs(bounds.top + bounds.height / 2 - readingLine);
          if (distance < closestDistance) {
            closestStory = story;
            closestDistance = distance;
          }
        }

        const projectId = closestStory?.dataset.projectStory;
        if (projectId) setActiveProject(projectId);
      });
    }

    updateActiveProject();
    window.addEventListener("scroll", updateActiveProject, { passive: true });
    window.addEventListener("resize", updateActiveProject);
    return () => {
      window.removeEventListener("scroll", updateActiveProject);
      window.removeEventListener("resize", updateActiveProject);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>BUATINAJA / SELECTED WORK</p>
        <h2 id="projects-title">My <span>Projects</span></h2>
        <p className={styles.introCopy}>A closer look at digital experiences built around real business needs.</p>
      </div>

      <div className={styles.projectLayout}>
        <div className={styles.projectStories}>
          {projects.map((project) => {
            const isActive = activeProject === project.id;

            return (
              <article
                aria-label={project.name}
                className={`${styles.projectStory} ${isActive ? styles.activeStory : ""}`}
                data-project-story={project.id}
                key={project.id}
              >
                <p className={styles.projectCategory}><span />{project.category}</p>
                <h3>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.focusLabel}>Technology &amp; focus</p>
                <ul className={styles.focusList}>
                  {project.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <button
                  aria-label={`View ${project.name} preview`}
                  className={styles.viewButton}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setActiveProject(project.id);
                    setOpenProject(project);
                  }}
                  type="button"
                >
                  <span>View Project</span>
                  <span aria-hidden="true" className={styles.buttonArrow}><ArrowUpRight className={styles.buttonArrowIcon} strokeWidth={1.8} /></span>
                </button>
              </article>
            );
          })}
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.visualStage} id="project-preview" aria-label="Selected project preview">
            <div className={styles.visualGlow} aria-hidden="true" />
            {projects.map((project) => (
              <figure
                aria-label={`${project.name} interface preview`}
                aria-hidden={activeProject !== project.id}
                className={`${styles.projectVisual} ${activeProject === project.id ? styles.visibleVisual : ""}`}
                key={project.id}
              >
                <ProjectPreview projectId={project.id} />
                <figcaption className={styles.visualCaption}>
                  <span>{project.category}</span>
                  <b>{project.name}</b>
                </figcaption>
              </figure>
            ))}
            <div className={styles.visualIndex} aria-hidden="true">
              <span>0{projects.findIndex((project) => project.id === activeProject) + 1}</span>
              <i />
              <span>03</span>
            </div>
          </div>
          <p className={styles.previewNote}>Representative project interface previews</p>
        </div>
      </div>

      <dialog
        aria-labelledby="project-dialog-title"
        className={styles.projectDialog}
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        onClose={() => {
          setOpenProject(null);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            dialogRef.current?.close();
          }
        }}
        ref={dialogRef}
      >
        {openProject && (
          <>
            <div className={styles.dialogTopline}>
              <span>PROJECT PREVIEW</span>
              <button
                aria-label="Close project preview"
                className={styles.dialogClose}
                onClick={() => dialogRef.current?.close()}
                type="button"
              >
                <Xmark aria-hidden="true" className={styles.closeIcon} strokeWidth={1.8} />
              </button>
            </div>
            <p className={styles.projectCategory}><span />{openProject.category}</p>
            <h2 className={styles.dialogTitle} id="project-dialog-title">{openProject.name}</h2>
            <p className={styles.dialogDescription}>{openProject.description}</p>
            <div className={styles.dialogPreview}>
              <ProjectPreview projectId={openProject.id} />
            </div>
            <ul className={styles.focusList}>
              {openProject.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </>
        )}
      </dialog>
    </section>
  );
}