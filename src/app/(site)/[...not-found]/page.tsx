import Image from "next/image";

export default function Custom404() {
  return (
    <div className="not-found_not-found__LjI67">
      <style>
        {`
        :root{
            --theme-primary: var(--blue-primary);
            --theme-primary-text: var(--blue-primary-text);
            --theme-secondary: var(--blue-secondary);
            --theme-text: var(--blue-text);
            --theme-background: var(--blue-tertiary);
            --theme-logo: var(--blue-secondary);
            --theme-header-face: var(--blue-primary);
        }`}
      </style>
      <h1 className="not-found_not-found__heading__yvzst">Whoops!</h1>
      <h2 className="not-found_not-found__error__fntSq">
        This page does not exist.
      </h2>
    </div>
  );
}
