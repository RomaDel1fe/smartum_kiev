import Image from "next/image";
import type { Teacher } from "@/data/teachers";
import { assetPath } from "@/lib/asset-path";

type TeacherCardProps = {
  teacher: Teacher;
  showBio?: boolean;
};

export function TeacherCard({ teacher, showBio = false }: TeacherCardProps) {
  const className = `teacher-card${showBio ? " teacher-card--course" : ""}`;

  return (
    <article className={className}>
      <div className="teacher-card__photo">
        <Image
          src={assetPath(teacher.photoUrl)}
          alt={`Викладачка ${teacher.name}`}
          width={480}
          height={560}
        />
      </div>
      <div className="teacher-card__body">
        <h3>{teacher.name}</h3>
        <p>{teacher.profile}</p>
        {showBio && <p className="teacher-card__bio">{teacher.bio}</p>}
      </div>
    </article>
  );
}
