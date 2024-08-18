import type { Meta, StoryObj } from "@storybook/react";
import TagInput from "../app/components/TagInput";
import { useState } from "react";
import { Tag } from "react-tag-input";

export default {
  title: "Example/TagInput",
  component: TagInput,
} as Meta;

type Story = StoryObj<Meta>;

export const Default: Story = {
  args: {
    placeholder: "Insira as tags desse post",
    tags: [{ id: "1", text: "JavaScript" }],
  },
};

export const VariousTags: Story = {
  args: {
    placeholder: "Insira as tags desse post",
    tags: [
      { id: "1", text: "JavaScript" },
      { id: "1", text: "Java" },
      { id: "1", text: "Ruby on Rails" },
      { id: "1", text: "Paython" },
      { id: "1", text: "C++" },
    ],
  },
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={(tag) => setTags([...tags, tag])}
      onDelete={(index) => setTags(tags.filter((tag, i) => i !== index))}
    />
  );
}
