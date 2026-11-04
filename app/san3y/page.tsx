import BlogNav from "@/components/blogs/BlogNav";
import { CaseStudy } from "@/components/projects/case-study";
import { san3yCaseStudy } from "@/components/projects/case-study/projects/san3y";

export default function MissionoPage() {
  return (
    <>
      <BlogNav />
      <CaseStudy project={san3yCaseStudy} />
    </>
  );
}