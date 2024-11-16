import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Default";
import EditorProfile from "../features/EditorProfile";
import ErrorBoundary from "../components/ErrorBoundary";

function EditorProfileView() {
  usePageTitle("Detalhes do editor");

  return (
    <DefaultLayout>
      <ErrorBoundary>
        <EditorProfile hidePersonalData />
      </ErrorBoundary>
    </DefaultLayout>
  );
}

export default EditorProfileView;
