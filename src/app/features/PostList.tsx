import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useMemo, useState } from "react";
import { Column, usePagination, useTable } from "react-table";
import Table from "../components/Table/Table";
import { Post } from "../../sdk/@types";
import PostService from "../../sdk/services/Post.service";
import { format } from "date-fns";
import withBoundary from "../../core/hoc/withBoundary";
import Loading from "../components/Loading";
import PostPreview from "./PostPreview";
import { modal } from "../../core/utils/modal";
import PostTitleLinkAnchor from "../components/PostTitleLinkAnchor";


function PostList() {
  const [posts, setPosts] = useState<Post.Paginated>();
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    
    PostService.getAllPosts({
      page,
      size: 7,
      showAll: true,
      sort: ["createdAt", "desc"],
    })
      .then(setPosts)
      .catch((error) => setError(new Error(error.message)))
      .finally(() => {
        setLoading(false)
      })
  }, [page]);

  if (error) throw error;

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: "",
        accessor: "id", // accessor is the "key" in the data
        Cell: () => <Icon path={mdiOpenInNew} size={"14px"} color={"#09f"} />,
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Título</div>,
        accessor: "title",
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              gap: 8,
              alignItems: "center",
              maxWidth: 270
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleLinkAnchor
              title={ props.value }
              href={`/posts/${props.row.original.id}`}
              onClick={e => {
                e.preventDefault()
                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.value}
            </PostTitleLinkAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Criação</div>,
        accessor: "createdAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {format(new Date(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      {
        Header: () => (
          <div style={{ textAlign: "right" }}>Ultima Atualização</div>
        ),
        accessor: "updatedAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: '"Roboto mono", monospace',
            }}
          >
            {format(new Date(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        accessor: "published",
        Header: () => <div style={{ textAlign: "right" }}>Ações</div>,
        Cell: (props) => (
          <div style={{ textAlign: "right" }}>
            {props.value ? "Publicado" : "Privado"}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>({
    data: posts?.content || [],
    columns,
    manualPagination: true,
    initialState: { pageIndex: 0 },
    pageCount: posts?.totalPages
  },
    usePagination
  );

  if (!posts)
    return (
      <div>
        <Skeleton height={32} />
        
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    );
  
  return (
    <>
      <Loading show={ loading } />
      <Table instance={instance} onPaginate={setPage} />
    </>
  );
}

export default withBoundary(PostList, "lista de posts");
