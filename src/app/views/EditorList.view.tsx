import usePageTitle from "../../core/hooks/UsePageTitle";
import EditorList from "../features/EditorList";
import DefaultLayout from "../layouts/Default/Default.layout";

export default function EditorListView() {
    usePageTitle("Lista de editores")
    return <DefaultLayout>
        <EditorList />
    </DefaultLayout>
}
