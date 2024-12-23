// src/components/BlogContent.tsx
'use client';

import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import SubScript from '@tiptap/extension-subscript';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import Superscript from '@tiptap/extension-superscript';
import OrderedList from '@tiptap/extension-ordered-list';

const BlogContent = ({ content }: { content: any }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      Heading.configure({
        HTMLAttributes: {
          class: 'text-2xl font-bold',
        },
        levels: [1],
      }),
      Highlight,
      Underline,
      Superscript,
      SubScript,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image,
      BulletList,
      ListItem,
      OrderedList
    ],
    editable: false,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};

export default BlogContent;