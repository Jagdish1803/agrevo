import Image from "next/image";
import { ProjectArt } from "@/components/ui/Artwork";
import type { Project, Screenshot as Shot } from "@/lib/data";

/**
 * A project's lead visual — the cover screenshot for live builds, generated
 * artwork for concept pieces. Like <ProjectArt />, it fills whatever box the
 * className gives it.
 */
export function ProjectCover({
  project,
  className = "",
  sizes,
  preload = false,
}: {
  project: Project;
  className?: string;
  /** `sizes` for the screenshot; ignored for vector artwork. */
  sizes: string;
  preload?: boolean;
}) {
  if (!project.shots) {
    return <ProjectArt variant={project.art} className={className} />;
  }

  return (
    <Screenshot
      shot={project.shots.cover}
      className={className}
      sizes={sizes}
      preload={preload}
    />
  );
}

/** A screenshot cropped from the top, so the page header always shows. */
export function Screenshot({
  shot,
  className = "",
  sizes,
  preload = false,
}: {
  shot: Shot;
  className?: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <div className={`relative bg-surface ${className}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover object-top"
      />
    </div>
  );
}
