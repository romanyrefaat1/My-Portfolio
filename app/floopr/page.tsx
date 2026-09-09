import BlogNav from "@/components/blogs/BlogNav";
import { CaseStudy } from "@/components/projects/case-study";
import { flooprCaseStudy } from "@/components/projects/case-study/projects/floopr";
import { SiteNav } from "@/components/site-nav";

export default function FlooprPage() {
	return (
		<>
		<BlogNav />
		<CaseStudy project={flooprCaseStudy} /></>
	);
}
