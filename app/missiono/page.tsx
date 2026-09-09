import BlogNav from "@/components/blogs/BlogNav";
import { CaseStudy } from "@/components/projects/case-study";
import { missionoCaseStudy } from "@/components/projects/case-study/projects/missiono";

export default function MissionoPage() {
  return (
    <>
      <BlogNav />
      <CaseStudy project={missionoCaseStudy} />
    </>
  );
}