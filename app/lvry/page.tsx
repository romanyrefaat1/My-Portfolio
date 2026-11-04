import BlogNav from "@/components/blogs/BlogNav";
import { CaseStudy } from "@/components/projects/case-study";
import { lvryCaseStudy } from "@/components/projects/case-study/projects/lvry";

export default function MissionoPage() {
  return (
    <>
      <BlogNav />
      <CaseStudy project={lvryCaseStudy} />
    </>
  );
}