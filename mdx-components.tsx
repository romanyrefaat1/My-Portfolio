import type { MDXComponents } from "mdx/types";
import CopyCodeButton from "@/components/blogs/CopyCodeButton";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getTextContent(node: unknown): string {
  if (typeof node === "string") {
    return node;
  }

  if (typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (
    typeof node === "object" &&
    node !== null &&
    "props" in node
  ) {
    const props = (node as {
      props?: { children?: unknown };
    }).props;

    return getTextContent(props?.children);
  }

  return "";
}

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    ...components,

    h2: (props) => {
      const text = getTextContent(props.children);

      return (
        <h2 id={slugify(text)} {...props}>
          {props.children}
        </h2>
      );
    },

    h3: (props) => {
      const text = getTextContent(props.children);

      return (
        <h3 id={slugify(text)} {...props}>
          {props.children}
        </h3>
      );
    },

    pre: (props) => {
      const codeText = getTextContent(props.children);

      return (
        <div className="code-block-wrapper">
          <CopyCodeButton code={codeText} />
          <pre {...props} />
        </div>
      );
    },
  };
}