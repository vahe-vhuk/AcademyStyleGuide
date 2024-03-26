import './CodeBlock.css';

import { CopyBlock, a11yLight} from "react-code-blocks";

function CustomCodeBlock({ lang, code}) {
  return (
    <div className="CodeBlock">
        <CopyBlock
          language={lang}
          text={code}
          codeBlock
          theme={ a11yLight}
          showLineNumbers={true}
        />
    </div>
  );
}

export default CustomCodeBlock;
