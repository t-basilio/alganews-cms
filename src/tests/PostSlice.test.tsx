import "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import store from "../core/store";
import { fetchPosts } from "../core/store/Post.slice";

jest.mock("t-basilio-sdk", () => ({
  PostService: {
    getAllPosts: () => ({
      page: 2,
      size: 9,
      totalPages: 15,
      totalElements: 442,
      content: [
        {
          id: 42,
          slug: "como-fazer-x-coisas-com-react-js",
          title: "Como fazer X coisas com React.js",
          imageUrls: {
            default:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
            small:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
            medium:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
            large:
              "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
          },
          editor: {
            id: 29,
            name: "Daniel Bonifacio",
            avatarUrls: {
              default:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
              small:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
              medium:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
              large:
                "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
            },
            createdAt: "2017-03-04T00:12:45Z",
          },
          createdAt: "2020-12-01T18:09:02Z",
          updatedAt: "2025-03-07T01:23:32.755Z",
          published: true,
          tags: ["JavaScript"],
          canBePublished: true,
          canBeUnpublished: true,
          canBeDeleted: true,
          canBeEdited: true,
        },
      ],
    }),
  },
}));

describe("Post slice module", () => {
  test("start with empty array on content", () => {
    const state = store.getState().post;
    expect(state.paginated?.content).toHaveLength(0);
  });

  test("updates state after fetchPosts dispatch", async () => {
    await store.dispatch(fetchPosts({}));
    const state = store.getState().post;

    expect(state.paginated?.content?.length).toBeGreaterThanOrEqual(1);
  });
});
